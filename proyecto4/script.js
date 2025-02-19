
let posicionNavegador ={x:undefined,y:undefined};

let moviendoBotonesDelNavegador = false;
let movido = false;
let elementoAMover;
let estadoVisibilidadNotas = false;


function clickEnBotonNotas(informacionDelEvento){
    if(!movido){
        if(estadoVisibilidadNotas) {
            ocultarNotas();
        } else {
            mostrarNotas();
        }
        estadoVisibilidadNotas = !estadoVisibilidadNotas;
    }
}

function ocultarNotas(){
    document.getElementById("notas").classList.remove("visible");
}

function mostrarNotas(){
    document.getElementById("notas").classList.add("visible");
}

function agregarListeners() {

    agregarListenersAUnElemento(document.getElementById("notas").querySelector("nav"));

    document.querySelectorAll("#notas ol li").forEach(
        (elemento)=>agregarListenersAUnElemento(elemento)
    );

    document.addEventListener("mouseleave",
        (informacionDelEvento)=>{
            moviendoBotonesDelNavegador = false;
        }
    );
    document.addEventListener("mousemove",
        (informacionDelEvento)=>{
            /*
            if(moviendoBotonesDelNavegador && elementoAMover){
                movido = true;
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
                */
        }        
    );


    document.getElementById("activar").addEventListener("click",(e) =>clickEnBotonNotas(e));
    
    document.getElementById("papelera").addEventListener("dragover",() => {
        console.log("dragover");
        document.getElementById("papelera").classList.add("open");
    });
    
    document.getElementById("papelera").addEventListener("dragleave",() =>{
        console.log("dragleave");
        document.getElementById("papelera").classList.remove("open");
    });
    
    document.getElementById("papelera").addEventListener("drop",(e) =>{
        console.log("drop", elementoAMover);
        elementoAMover.remove();
    });
}
function agregarListenersAUnElemento(elemento) {
    elemento.addEventListener("dragstart", (e) => {
        console.log("dragstart");
        e.dataTransfer.setData("text/plain", e.target.id);
    });

    elemento.addEventListener("mousedown",
                (informacionDelEvento)=>{
                    elementoAMover = elemento;
                    moviendoBotonesDelNavegador = true;
                    movido=false;
                    posicionNavegador.x = informacionDelEvento.offsetX;
                    posicionNavegador.y = informacionDelEvento.offsetY;
                    elemento.style.cursor = "grabbing";
                    //if(informacionDelEvento.target.tagName !== "TEXTAREA")
                        //informacionDelEvento.preventDefault();
                }
    );

    elemento.addEventListener("mouseup",
        (informacionDelEvento)=>{
            if(moviendoBotonesDelNavegador && elementoAMover){
                //movido = true;
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
            moviendoBotonesDelNavegador = false;
            elemento.style.cursor = "pointer";

        }
    );


}