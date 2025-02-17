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
    console.log("mostrarOverlay");
}