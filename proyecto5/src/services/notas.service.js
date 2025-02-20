import {Nota} from '../models/nota.js';
import {repositorioDeNotasEnUso} from '../repository/notas.repository.js';
import {ColoresDeNotas} from '../models/colores.js';

export const ValoresPorDefecto = Object.freeze({
    ancho: 300,
    color: ColoresDeNotas.amarillo,
    texto: "Escribe aquí tu nota...",
});

export const EventosDelServicioDeNotas = Object.freeze({
    notaCargada: 'notaCargada',
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
        repositorioDeNotasEnUso.deleteNota(id);
        this.notificar(EventosDelServicioDeNotas.notaEliminada, id);
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
        repositorioDeNotasEnUso.updateNota(nota);
        this.notificar(EventosDelServicioDeNotas.notaModificada, nota);
    }

    modificarUbicacionDeLaNota(id, posicion){
        const nota = repositorioDeNotasEnUso.getNotaById(id);
        nota.posicion = posicion;
        repositorioDeNotasEnUso.updateNota(nota);
        this.notificar(EventosDelServicioDeNotas.notaModificada, nota);
    }

    modificarColorDeLaNota(id, color){
        const nota = repositorioDeNotasEnUso.getNotaById(id);
        nota.color = color;
        repositorioDeNotasEnUso.updateNota(nota);
        this.notificar(EventosDelServicioDeNotas.notaModificada, nota);
    }

    addEventListener(evento, callback){
        if(evento === EventosDelServicioDeNotas.notaCargada){
            repositorioDeNotasEnUso.getNotas().forEach(nota => callback(nota));
        } else {
            if(!this.listeners.has(evento)){
                this.listeners.set(evento, []);
            }
            this.listeners.get(evento).push(callback);
        }
    }

    notificar(evento, datos){
        if(this.listeners.has(evento)){
            this.listeners.get(evento).forEach(callback => callback(datos));
        }
    }
    
}

export const notasService = new NotasService();