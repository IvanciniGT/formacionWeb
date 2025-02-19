
export function usarNotas(){
    generarLaEstructuraBasicaHTMLDeLasNotas();
    configurarListenersDeEventos();
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
}

function configurarListenerDelBotonDePapelera(){
    // Click: Mostrar en pantalla las notas eliminadas
    // MouseUp: Eliminar una nota, si estoy moviendo una
}

function configurarListenerDelBotonDeActivar(){
    // Click: Mostrar en pantalla todas las notas
}

function configurarListenerDelBotonDeNuevaNota(){
    // Click: Crear una nueva nota
}

function configurarListenerDelPanelDeBotones(){
    // MouseDown/Move/Over: Mover el panel de botones
}

function configurarListenersDeEventosDelServicioDeNotas(){
    // Todos estos eventos los configuro en el Servicio de Notas
    // Cuando se cree una nota:
        // generarNotaHTML(nota)
    // Cuando se actualice una nota:
        // actualizarNotaHTML(nota)
    // Cuando se elimine una nota:
        // eliminarNotaHTML(nota)
        // cambiarIconoDeLaPapeleraDeReciclaje()
    // Cuando se vacíe la papelera de reciclaje:
        // cambiarIconoDeLaPapeleraDeReciclaje()
    // Cuando se restaure una nota:
        // generarNotaHTML(nota)
}

function generarLaEstructuraBasicaHTMLDeLasNotas(){
/* ESTRUCTURA BASICA
<aside id="notas">
    <nav style="top: 100px; left: 100px;">
        <ul>
            <li id="activar"></li>
            <li id="nuevaNota" ></li>
            <li id="papelera" ></li>
        </ul>
    </nav>
    <ol>
    </ol>
</aside>
*/ 
}

function generarNotaHTML(nota){
//        <li id="nota1" draggable="true" style="top: 100px; left: 400px; width: 300px;">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ab ut ad illo placeat odit, deleniti consectetur facere a ipsa voluptatibus natus praesentium eligendi nostrum esse culpa. Eum, vero labore.</li>
// Necesitamos ponerle Listeners a cada nota
// Doble-click: convertirNotaEnEditable(nota)
// MouseDown/Move/Over: moverNota(nota)
}

function convertirNotaEnEditable(nota){
// OnBlur, KeyPress(Enter): guardarCambiosEnNota(nota)
                            convertirNotaEnNoEditable(nota);
// quitarle el evento de doble-click

/*      <li id="nota2" draggable="true" style="top: 200px; left: 100px; width: 350px;" class="editable">
            <textarea>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis natus eius officia delectus nisi ex, consectetur incidunt perspiciatis labore? Perferendis minima soluta placeat! Sapiente impedit asperiores hic explicabo rerum?</textarea>
        </li>
*/
}

function convertirNotaEnNoEditable(nota){
    // añadirle el evento de doble-click
    // quito el evento de blur, keypress
}

function cambiarIconoDeLaPapeleraDeReciclaje(){

}



