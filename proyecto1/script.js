
//console.log('YA ESTAMOS CARGANDO EL JS');


function toogleLogout(){
    let confirmLogout = document.getElementById('confirm-logout');
    if(confirmLogout.style.display !== 'flex'){
        confirmLogout.style.display = 'flex';
    }else{
        confirmLogout.style.display = 'none';
    }
}

function logout(){
    toogleLogout();
    console.log('Acabas de hacer el Logout');
}



function mostrarToast(id, titulo, mensaje){
    console.log('Vamos a mostrar un toast');
    const container = ensureToastContainer();

    const template = document.getElementById('toast-template');
    const nuevoToast = template.content.cloneNode(true);

    // Le asigno el titulo y el texto al toast
    nuevoToast.querySelector('h3').textContent = titulo;
    nuevoToast.querySelector('p').innerHTML = mensaje;
    const divToast =  nuevoToast.querySelector('.toast');
    divToast.id = id;
    divToast.addEventListener('click', () => closeToast(id) );

    container.appendChild(nuevoToast);

    //<div id="toast-container"></div>
}

function closeToast(toastId){
    const toast = document.getElementById(toastId);
    if(toast)
        ensureToastContainer().removeChild(toast);
}

function ensureToastContainer(){
    let toastContainer = document.getElementById('toast-container');
    if( !toastContainer ){
        toastContainer = document.createElement('div');
        toastContainer.id = 'toast-container';
        document.body.appendChild(toastContainer);
    }
    return toastContainer;
}