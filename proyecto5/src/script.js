import {notasService, EventosDelServicioDeNotas, ValoresPorDefecto} from "./services/notas.service.js";



let elementoAMover;
let posicionNavegador ={x:undefined,y:undefined};
let movido = false;

export function usarNotas(){
    generarLaEstructuraBasicaHTMLDeLasNotas();
    configurarListenersDeEventos();
    inicializarServicioDeNotas();
}

function inicializarServicioDeNotas(){
    notasService.inicializar();
}

function configurarListenersDeEventos(){
    configurarListenersDeEventosDelServicioDeNotas();
    configurarListenersDeLosBotonesDeLaInterfaz();
}

function configurarListenersDeLosBotonesDeLaInterfaz(){
    configurarListenerDelPanelDeBotones();
    configurarListenerDelBotonDeNuevaNota();
    configurarListenerDelBotonDeActivar();
    configurarListenerDelBotonDePapelera();
    configurarListenerDelDocumento();
}

function configurarListenerDelDocumento(){

    document.addEventListener("mousemove",
        (informacionDelEvento)=>{
            if(elementoAMover){
                movido=true;
                let nuevaPosicionX = informacionDelEvento.clientX - posicionNavegador.x;
                let nuevaPosicionY = informacionDelEvento.clientY - posicionNavegador.y;
                
                if(nuevaPosicionX < 10) {
                    nuevaPosicionX = 10;
                }
                if(nuevaPosicionY < 10) {
                    nuevaPosicionY = 10;
                }

                if(nuevaPosicionX + elementoAMover.offsetWidth + 10 > document.documentElement.clientWidth){
                    nuevaPosicionX = document.documentElement.clientWidth - elementoAMover.offsetWidth - 10;
                }

                if(nuevaPosicionY + elementoAMover.offsetHeight + 10 > document.documentElement.clientHeight){
                    nuevaPosicionY = document.documentElement.clientHeight - elementoAMover.offsetHeight - 10;
                }

                elementoAMover.style.left = `${nuevaPosicionX}px`;
                elementoAMover.style.top = `${nuevaPosicionY}px`;
            }
        }        
    );

}

function configurarListenerDelBotonDePapelera(){
    const papelera = document.getElementById("papelera");
    // Click: Mostrar en pantalla las notas eliminadas
    // MouseUp: Eliminar una nota, si estoy moviendo una
    papelera.addEventListener("mouseup", (informacionDelEvento) => {
        if(elementoAMover?.id.startsWith("nota")){
            notasService.eliminarNota(elementoAMover.id);
            elementoAMover=undefined;
        }
        informacionDelEvento.stopPropagation();
    });
    papelera.addEventListener("mousedown", (informacionDelEvento) => {
        informacionDelEvento.stopPropagation();
    });
    papelera.addEventListener("mouseenter", () => {
        if(elementoAMover){
            papelera.classList.add("open");
        }
    });
    papelera.addEventListener("mouseleave", () => {
            papelera.classList.remove("open");
    });
}

function configurarListenerDelBotonDeActivar(){
    // Click: Mostrar en pantalla todas las notas
    document.getElementById("activar").addEventListener(
        "click", 
        () => !movido && clickEnBotonNotas()
    );
}

function configurarListenerDelBotonDeNuevaNota(){
    document.getElementById("nuevaNota").addEventListener(
        "click", 
        () => notasService.crearNuevaNota()
    );

    document.getElementById("nuevaNota").addEventListener("mousedown", (informacionDelEvento) => {
        informacionDelEvento.stopPropagation();
    });
}

function configurarListenerDelPanelDeBotones(){
    const panelDeBotones = document.querySelector("#notas nav");
    panelDeBotones.addEventListener("mousedown",
        (informacionDelEvento)=>{
            movido=false;
            if(informacionDelEvento.button === 0){
                elementoAMover = panelDeBotones;
                posicionNavegador.x = informacionDelEvento.offsetX;
                posicionNavegador.y = informacionDelEvento.offsetY;
                panelDeBotones.style.cursor = "grabbing";
                informacionDelEvento.preventDefault();
            }
        }
    );

    panelDeBotones.addEventListener("mouseup",
        (informacionDelEvento)=>{
            if(informacionDelEvento.button === 0){
                panelDeBotones.style.cursor = "pointer";
                elementoAMover = undefined;
                informacionDelEvento.stopPropagation();
            }
        }
    );}
function cargarNotasIniciales(){
    notasService.addEventListener(
        EventosDelServicioDeNotas.notaCargada, 
        (nota) => {
            generarNotaHTML(nota);
        }
    );

}
function configurarListenersDeEventosDelServicioDeNotas(){
    cargarNotasIniciales();
    // Todos estos eventos los configuro en el Servicio de Notas
    // Cuando se vacíe la papelera de reciclaje:
        // cambiarIconoDeLaPapeleraDeReciclaje()
    // Cuando se restaure una nota:
        // generarNotaHTML(nota)
    notasService.addEventListener(
        EventosDelServicioDeNotas.notasCargadas, 
        (notas) => {
            document.getElementById("notas").querySelector("ol").innerHTML = "";
            notas.forEach(nota => generarNotaHTML(nota));
        }
    );
    notasService.addEventListener(
        EventosDelServicioDeNotas.notaCreada, 
        (nota) => {
            console.log("Nota creada", nota);
            generarNotaHTML(nota);
            convertirNotaEnEditable(nota);
        }
    );
        notasService.addEventListener(
        EventosDelServicioDeNotas.notaModificada,
        (nota) => modificarHTMLNota(nota)
    );
    notasService.addEventListener(
        EventosDelServicioDeNotas.notaEliminada,
        (id) => {
            const notaElement = document.getElementById(id);
            notaElement.addEventListener("transitionend", () => {
                document.getElementById(id)?.remove();
                elementoAMover = undefined;
                document.getElementById("papelera").classList.remove("open");
            });
            notaElement.classList.add("eliminar");

            notaElement.style.transition = "all 0.5s ease";
            const left = document.getElementById("papelera").getBoundingClientRect().left - notaElement.offsetWidth/2;
            notaElement.style.left = `${left}px`;
            const top = document.getElementById("papelera").getBoundingClientRect().top - 10;
            notaElement.style.top = `${top}px`;
        }
    );
}

function generarLaEstructuraBasicaHTMLDeLasNotas(){
    const aside = document.createElement("aside");
    aside.id = "notas";
    aside.innerHTML = `
            <nav style="top: 100px; left: 100px;">
                <ul>
                    <li id="activar"></li>
                    <li id="nuevaNota" ></li>
                    <li id="papelera" ></li>
                </ul>
            </nav>
            <ol>
            </ol>
            <template id="nota-template"><li></li></template>
        `;
    document.body.appendChild(aside);
}

function generarNotaHTML(nota){
    const clonadoDePlantillaNota = document.getElementById("nota-template").content.cloneNode(true);
    const notaElement = clonadoDePlantillaNota.querySelector("li");
    notaElement.id = nota.id;
    document.querySelector("#notas ol").appendChild(notaElement);
    modificarHTMLNota(nota);

    notaElement.addEventListener("mousedown",
        (informacionDelEvento)=>{
            if(informacionDelEvento.button === 0){
                movido = false;
                if(!notaElement.querySelector("textarea")){
                    elementoAMover = notaElement;
                    posicionNavegador.x = informacionDelEvento.offsetX;
                    posicionNavegador.y = informacionDelEvento.offsetY;
                    notaElement.style.cursor = "grabbing";
                }
                informacionDelEvento.stopPropagation();
                informacionDelEvento.preventDefault();
            }
        }
    );

    notaElement.addEventListener("mouseup",
        (informacionDelEvento)=>{
            if(informacionDelEvento.button === 0 && movido){
                notasService.modificarUbicacionDeLaNota(
                    nota.id, 
                    {x:notaElement.offsetLeft, y:notaElement.offsetTop}
                );
            } 
            notaElement.style.cursor = "pointer";
            elementoAMover = undefined;

        }
    );
    notaElement.addEventListener("dblclick", 
        (e) => {
            if(!notaElement.querySelector("textarea"))
                convertirNotaEnEditable(nota);
        }
    );

}

function convertirNotaEnEditable(nota){
    const notaElement = document.getElementById(nota.id);
    if(nota.texto === ValoresPorDefecto.texto)
        notaElement.innerHTML = `<textarea placeholder="${nota.texto}"></textarea>`;
    else
        notaElement.innerHTML = `<textarea>${nota.texto}</textarea>`;
    // ponerle el foco al textarea
    const textarea= notaElement.querySelector("textarea");

    textarea.addEventListener("blur", () => guardarCambiosEnNota(nota)); // evento de perder foco
    textarea.addEventListener(
        "keypress", 
        (e) => {
                   if(e.key === "Enter"){
                        guardarCambiosEnNota(nota);
                    }
               }
    );
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);

}

function guardarCambiosEnNota(nota){
    const notaElement = document.getElementById(nota.id);
    const textarea = notaElement.querySelector("textarea");
    let nuevoTexto = textarea.value.trim();
    if(nuevoTexto === "")
        nuevoTexto = nota.texto;
    notasService.modificarElTextoDeLaNota(nota.id, nuevoTexto);
}

function modificarHTMLNota(nota){
    const notaElement = document.getElementById(nota.id);
    notaElement.style.top = `${nota.posicion.y}px`;
    notaElement.style.left = `${nota.posicion.x}px`;
    notaElement.style.width = `${nota.ancho}px`;
    try{
        notaElement.innerHTML = nota.texto;
    } catch(e) {
    }
}

function cambiarIconoDeLaPapeleraDeReciclaje(){

}



///////////////////////////////

let estadoVisibilidadNotas = false;


function clickEnBotonNotas(){
    if(estadoVisibilidadNotas) {
        ocultarNotas();
    } else {
        mostrarNotas();
    }
    estadoVisibilidadNotas = !estadoVisibilidadNotas;
}

function ocultarNotas(){
    document.getElementById("notas").classList.remove("visible");
}

function mostrarNotas(){
    document.getElementById("notas").classList.add("visible");
}
