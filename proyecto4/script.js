
let posicionNavegador ={x:undefined,y:undefined};

let moviendoBotonesDelNavegador = false;

function agregarListenersAlNavegador() {

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
}