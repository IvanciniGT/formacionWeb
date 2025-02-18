
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
                    let nuevaPosicionX = informacionDelEvento.clientX - posicionNavegador.x;
                    let nuevaPosicionY = informacionDelEvento.clientY - posicionNavegador.y;
                    
                    if(nuevaPosicionX < 10) nuevaPosicionX = 10;
                    if(nuevaPosicionY < 10) nuevaPosicionY = 10;

                    if(nuevaPosicionX + navegador.offsetWidth + 10 > document.documentElement.clientWidth)
                        nuevaPosicionX = document.documentElement.clientWidth - navegador.offsetWidth - 10;

                    if(nuevaPosicionY + navegador.offsetHeight + 10 > document.documentElement.clientHeight)
                        nuevaPosicionY = document.documentElement.clientHeight - navegador.offsetHeight - 10;

                    navegador.style.left = `${nuevaPosicionX}px`;
                    navegador.style.top = `${nuevaPosicionY}px`;
                }
            }        
    );

    document.getElementById("activar").addEventListener("click",(e) =>clickEnBotonNotas(e));
}