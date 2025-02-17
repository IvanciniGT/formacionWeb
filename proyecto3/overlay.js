/*<div class="overlay" style="background-color: #dddddddd">
    <img class="overlay-image" src="overlay.jpg" style="opacity:0.2">
    <h2 class="overlay-title">Estamos realizando su búsqueda</h2>
    <p class="overlay-message">Tardaremos solamente unos segundos.</p>
</div>
*/

function mostrarOverlay(
    contenido = {
        titulo: {
            texto: 'Título por defecto',
            caracteristicas: {}
        }, 
        mensaje: {
            texto: 'Texto por defecto',
            caracteristicas: {}
        },
        fondo: {
            color: '#dddddddd',
            imagen: 'overlay.jpg',
            transparencia: 0.2,
        }
    },
    promesa = undefined
){
    const overlayTemplate = obtenerPlantillaHTMLOverlay();
    const overlayElement = generarEstructuraHTMLOverlay(overlayTemplate, contenido);
    const funcionCerrado = generarFuncionDeCerrado(overlayElement);
    configurarAutoCerrado( promesa, funcionCerrado);
    return funcionCerrado;
}

function configurarAutoCerrado(promesa, funcionCerrado){
    promesa?.then(funcionCerrado);
}

function generarFuncionDeCerrado(overlayElement){ // Closure: Función que devuelve otra función creada en su ámbito
    return () => {
        overlayElement.addEventListener('transitionend', () => overlayElement.remove());
        overlayElement.classList.remove('visible');
    }
}

function obtenerPlantillaHTMLOverlay(){
    crearLaPlantillaSiNoExiste();
    return recuperarLaPlantilla();
}

function crearLaPlantillaSiNoExiste(){
    const plantilla = document.getElementById('overlay-template');
    if(!plantilla) {
        const nuevaPlantilla = document.createElement('template');
        nuevaPlantilla.id = 'overlay-template';
        nuevaPlantilla.innerHTML = `
            <div class="overlay">
                <img class="overlay-image">
                <h2 class="overlay-title"></h2>
                <p class="overlay-message"></p>
            </div>
        `;
        document.body.appendChild(nuevaPlantilla);
    }
}

function recuperarLaPlantilla(){
    return document.getElementById('overlay-template');
}

function generarEstructuraHTMLOverlay(overlayTemplate, contenido){
    const clonado = overlayTemplate.content.cloneNode(true);
    const identificadorDelOverlay = generateUniqueId();
    clonado.querySelector('.overlay').id = identificadorDelOverlay;
    //if(contenido.fondo && contenido.fondo.imagen){
    if(contenido.fondo?.imagen){
        clonado.querySelector('.overlay-image').src = contenido.fondo.imagen;
        clonado.querySelector('.overlay-image').style.opacity = contenido.fondo.transparencia??1;
                    // contenido.fondo.transparencia ? contenido.fondo.transparencia : 1;
                    // contenido.fondo.transparencia ?? 1; Operador de coalescencia nula
    } else {
        clonado.querySelector('.overlay-image').style.display = 'none';
    }
    if(contenido.fondo?.color){
        clonado.querySelector('.overlay').style.backgroundColor = contenido.fondo.color;
    }
    if(contenido.titulo?.texto){
        clonado.querySelector('.overlay-title').textContent = contenido.titulo.texto;
    }
    if(contenido.mensaje?.texto){
        clonado.querySelector('.overlay-message').textContent = contenido.mensaje.texto;
    }
    document.body.appendChild(clonado);
    const elementoOverlay = document.getElementById(identificadorDelOverlay);
    requestAnimationFrame( ()=> {
        setTimeout( ()=>elementoOverlay.classList.add('visible'), 0); 
    });
    // ^^^ Le digo al navegador que haga un renderizado cuando pueda... y que después de hacerlo, 
    //     ejecute la función que le suministro... en nuestro caso, una función que añade la clase 'visible'
    // Esto fuerza la ejecución del `transition`
    return elementoOverlay;
}


function generateUniqueId(){
    let id = ('toast-'+(Math.random()*Math.random())+Math.random()).substring(0,20);
    if(document.getElementById(id))
        id = generateUniqueId();
    return id.replace('.','-');
}
