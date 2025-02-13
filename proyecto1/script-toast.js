
const currentToasts = new Map();// Conjunto clave / valor
/*

| id del toast             |           state, delay               |
|--------------------------|--------------------------------------|
| 'toast-123'              | {state: true, delay: 100 }           |
| 'toast-456'              | {state: false, delay: 1000 }         |
| 'toast-789'              | {state: true, delay: 500 }           |

*/


function showToast(titulo, mensaje, estilo, duracion, funcionAEjecutar = () => {}){

    const id = generateUniqueId();

    const container = ensureToastContainer();

    const template = document.getElementById('toast-template');
    const nuevoToast = template.content.cloneNode(true);

    // Le asigno el titulo y el texto al toast
    nuevoToast.querySelector('h3').textContent = titulo;
    nuevoToast.querySelector('p').innerHTML = mensaje;
    const divToast =  nuevoToast.querySelector('.toast');
    divToast.id = id;
    divToast.classList.add(estilo);

    divToast.addEventListener('click', () => { 
                                                markToastForDeletion(id);
                                                funcionAEjecutar();
                                             } );
    divToast.addEventListener('mouseenter', () => pauseToastProgressBar(id));
    divToast.addEventListener('mouseleave', () => resumeToastProgressBar(id));
    
    container.appendChild(nuevoToast);
    
    // Solicitar un renderizado de la página (y dejar programado que cuando se haga el renderizado,
    //  se añada la clase 'show')
    // Eso fuerza que haya un CAMBIO REAL en las propiedades CSS, y por ende que se dispare el transition
    requestAnimationFrame( ()=> divToast.classList.add('show') );
    startToastProgressBar(id, duracion);
    //<div id="toast-container"></div>
}

function pauseToastProgressBar(toastId){
    const toastObject = currentToasts.get(toastId);
    if( toastObject ) {
        toastObject.state = false;
        currentToasts.set(toastId, toastObject);
    }
}

function resumeToastProgressBar(toastId){
    const toastObject = currentToasts.get(toastId);
    if( toastObject ) {
        toastObject.state = true;
        currentToasts.set(toastId, toastObject);
        const progressBar=document.getElementById(toastId).querySelector('.progress-bar');
        decrementToastProgressBar(progressBar, toastObject.delay);
    }
}

function startToastProgressBar(toastId, duracion){
    const progressBar=document.getElementById(toastId).querySelector('.progress-bar');

    progressBar.style.width = '100%';
    const delay = duracion / 500;
    setTimeout( () => decrementToastProgressBar(progressBar, delay), delay);
    currentToasts.set(toastId, {state:true, delay: delay});
}
// Vamos a hacer que la barra de progreso baje de 1 en 1...
// Cada cuanto debe bajar 1?
function decrementToastProgressBar(barraDeProgreso, delay){
    let ancho = parseFloat(barraDeProgreso.style.width);
    ancho -= 0.2;
    barraDeProgreso.style.width = ancho + '%';
//    if( currentToasts.get(barraDeProgreso.parentElement.id) !== undefined 
//        && currentToasts.get(barraDeProgreso.parentElement.id).state ){

    if( currentToasts.get(barraDeProgreso.parentElement.id)?.state ){
        if( ancho >= 0 )
            setTimeout( () => decrementToastProgressBar(barraDeProgreso, delay), delay);
        else
            markToastForDeletion(barraDeProgreso.parentElement.id);
    }
}

function markToastForDeletion(toastId){
    const divToast = document.getElementById(toastId);
    if(divToast){
        // Necesitamos activar una animación
        divToast.addEventListener('transitionend', () => closeToast(toastId) ); // GUAY
        divToast.classList.remove('show');
        divToast.classList.add('hide');
        // Pero borraremos después de la animación
        //setTimeout(()=>closeToast(toastId), 500); //UN POCO ÑAPA... 
    }

}

function closeToast(toastId){
    const toast = document.getElementById(toastId);
    if(toast){
        const container = ensureToastContainer();
        container.removeChild(toast);
        currentToasts.delete(toastId);
        if(container.children.length === 1 )
            container.remove();
    }
}

function ensureToastContainer(){
    let toastContainer = document.getElementById('toast-container');
    if( !toastContainer ){
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        toastContainer.innerHTML=`
            <template id="toast-template">
                <div class="toast">
                    <div class="progress-bar"></div>
                    <h3>TITULO</h3>
                    <p>TEXTO</p>
                </div>
            </template>
        `;
        document.body.appendChild(toastContainer);
    }
    return toastContainer;
}

function generateUniqueId(){
    let id = ('toast-'+(Math.random()*Math.random())+Math.random()).substring(0,20);
    if(document.getElementById(id))
        id = generateUniqueId();
    return id.replace('.','-');
}
