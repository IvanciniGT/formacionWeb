import {Nota} from '../models/nota.js';
import {repositorioDeNotasEnUso} from '../repository/notas.repository.js';
import {ColoresDeNotas} from '../models/colores.js';
import { mostrarOverlay } from '../../overlay.js';



export const ValoresPorDefecto = Object.freeze({
    ancho: 300,
    color: ColoresDeNotas.amarillo,
    texto: "Escribe aquí tu nota...",
});

export const EventosDelServicioDeNotas = Object.freeze({
    notasCargadas: 'notasCargadas',
    notaCreada: 'notaCreada',
    notaEliminada: 'notaEliminada',
    notaRestaurada: 'notaRestaurada',
    notaModificada: 'notaModificada',
    papeleraVaciada: 'papeleraVaciada',
});

// Define lógica de negocio
class NotasService {

    constructor(){
        this.listeners = new Map();
        document.addEventListener("visibilitychange" , 
            ()=>{
                if(document.visibilityState === 'visible'){
                        this.inicializar();
                } 
            }
        );
    }

    async inicializar(){
        if(repositorioDeNotasEnUso.recargarNotas){
            const promesaDeCarga=repositorioDeNotasEnUso.recargarNotas();
            const funcionCierreOverlayNormal = mostrarOverlayCargando(promesaDeCarga);
            promesaDeCarga.then(
                () => this.notificar(EventosDelServicioDeNotas.notasCargadas, repositorioDeNotasEnUso.getNotas())
            ).catch(
                () => {
                    funcionCierreOverlayNormal();
                    const funcionCierre = mostrarOverlayError(promesaDeCarga)
                    setTimeout(() => {
                        funcionCierre()
                        this.inicializar()
                    }, 5000);
                }
            );
        }
    }

    crearNuevaNota(texto = ValoresPorDefecto.texto, color = ValoresPorDefecto.color){
        const x = ( document.documentElement.clientWidth - ValoresPorDefecto.ancho ) / 2;
        const y = ( document.documentElement.clientHeight - 100 ) / 2; //TODO.. ese 100 no me gusta
        const posicion = { x, y };
        const nuevaNota = new Nota( 
                                    texto, 
                                    posicion,
                                    ValoresPorDefecto.ancho,
                                    color
                                );
        const nuevaNotaConId = repositorioDeNotasEnUso.addNota(nuevaNota);
        this.notificar(EventosDelServicioDeNotas.notaCreada, nuevaNotaConId);
        return nuevaNotaConId;
    }

    obtenerNotas(){
        return repositorioDeNotasEnUso.getNotas();
    }

    eliminarNota(id){
        repositorioDeNotasEnUso.deleteNota(id).then(
            () => this.notificar(EventosDelServicioDeNotas.notaEliminada, id)
        ).catch(
            () => {
                const funcionCierre = mostrarOverlayError(repositorioDeNotasEnUso.deleteNota(id));
                setTimeout(() => {
                    funcionCierre()
                    this.eliminarNota(id)
                }, 5000);
            }
        );
        //this.notificar(EventosDelServicioDeNotas.notaEliminada, id);
    }

    vaciarPapeleraReciclaje(){
        repositorioDeNotasEnUso.emptyPapeleraReciclaje();
        this.notificar(EventosDelServicioDeNotas.papeleraVaciada);
    }

    restaurarNota(id){
        repositorioDeNotasEnUso.restoreNota(id);
        this.notificar(EventosDelServicioDeNotas.notaRestaurada, repositorioDeNotasEnUso.getNotaById(id));
    }

    modificarElTextoDeLaNota(id, texto){
        const nota = repositorioDeNotasEnUso.getNotaById(id);
        nota.texto = texto;
        repositorioDeNotasEnUso.updateNota(nota).then(
            ()=>this.notificar(EventosDelServicioDeNotas.notaModificada, nota)
        );
    }

    modificarUbicacionDeLaNota(id, posicion){
        const nota = repositorioDeNotasEnUso.getNotaById(id);
        nota.posicion = posicion;
        repositorioDeNotasEnUso.updateNota(nota).then(
            ()=>this.notificar(EventosDelServicioDeNotas.notaModificada, nota)  
        );
    }

    modificarColorDeLaNota(id, color){
        const nota = repositorioDeNotasEnUso.getNotaById(id);
        nota.color = color;
        repositorioDeNotasEnUso.updateNota(nota).then(
            ()=>this.notificar(EventosDelServicioDeNotas.notaModificada, nota)
        );
    }

    addEventListener(evento, callback){
        if(!this.listeners.has(evento)){
            this.listeners.set(evento, []);
        }
        this.listeners.get(evento).push(callback);
        if(evento === EventosDelServicioDeNotas.notasCargadas){
            callback(repositorioDeNotasEnUso.getNotas());
        }
    }

    notificar(evento, datos){
        if(this.listeners.has(evento)){
            this.listeners.get(evento).forEach(callback => callback(datos));
        }
    }
    
}


function mostrarOverlayCargando( promesa ){
    /*
    return mostrarOverlay(
        {
            titulo: {
                texto: 'Estamos cargando las notas',
                caracteristicas: {
                    velocidad: 20,
                    cursor: '',
                    estiloTexto: 'titulo-overlay',
                },
            }, 
            mensaje: {
                texto: 'Tardaremos solamente unos segundos',
                caracteristicas: {
                    velocidad: 120,
                    cursor: '_',
                    velocidadParpadeoCursor: 300,
                    estiloTexto: 'texto-overlay',
                    estiloCursor: 'texto-overlay',
                    ocultarCursorAlFinalizar: false
                },
            },
            fondo: {
                color: '#ddffdddd',
                imagen: 'overlay.jpg',
                transparencia: 0.2,
            }
        },
        promesa
    );
    */
}

function mostrarOverlayError( promesa ){
    return mostrarOverlay(
        {
            titulo: {
                texto: 'Error al cargar las notas',
                caracteristicas: {
                    velocidad: 20,
                    cursor: '',
                    estiloTexto: 'titulo-overlay',
                },
            }, 
            mensaje: {
                texto: 'Lo reintentaremos en unos segundos',
                caracteristicas: {
                    velocidad: 120,
                    cursor: '_',
                    velocidadParpadeoCursor: 300,
                    estiloTexto: 'texto-overlay',
                    estiloCursor: 'texto-overlay',
                    ocultarCursorAlFinalizar: false
                },
            },
            fondo: {
                color: '#ff5555dd',
                imagen: 'overlay.jpg',
                transparencia: 0.2,
            }
        },
        promesa
    );
}




export const notasService = new NotasService();