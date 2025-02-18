
let posicionNavegador ={x:undefined,y:undefined};

let moviendoBotonesDelNavegador = false;

let estadoVisibilidadNotas = false;


function clickEnBotonNotas(informacionDelEvento){
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

function agregarListeners() {

    const navegador = document.getElementById("notas")
            .querySelector("nav");

    navegador.addEventListener("mousedown",
                (informacionDelEvento)=>{
                    moviendoBotonesDelNavegador = true;
                    posicionNavegador.x = informacionDelEvento.offsetX;
                    posicionNavegador.y = informacionDelEvento.offsetY;
                    navegador.style.cursor = "grabbing";
                }
    );

    navegador.addEventListener("mouseup",
        (informacionDelEvento)=>{
            moviendoBotonesDelNavegador = false;
            navegador.style.cursor = "pointer";
        }
    );


    document.addEventListener("mousemove",
            (informacionDelEvento)=>{
                if(moviendoBotonesDelNavegador){
                    const nuevaPosicionX = informacionDelEvento.clientX - posicionNavegador.x;
                    const nuevaPosicionY = informacionDelEvento.clientY - posicionNavegador.y;

                    navegador.style.left = `${nuevaPosicionX}px`;
                    navegador.style.top = `${nuevaPosicionY}px`;
                }
            }        
    );

    document.getElementById("activar").addEventListener("click",(e) =>clickEnBotonNotas(e));
}