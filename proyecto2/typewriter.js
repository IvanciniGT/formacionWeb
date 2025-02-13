
const tareasProgramadas = new Map();

const CaracteristicasPorDefecto = {
    velocidad: 100,
    cursor: '_',
    velocidadParpadeoCursor: 500,
    estiloTexto: undefined,
    estiloCursor: undefined,
    ocultarCursorAlFinalizar: false
}

async function escribirPocoAPoco( textoAEscribir, donde, caracteristicas = {} ){
    caracteristicas = completarConValoresPorDefecto(caracteristicas);
    const elemento  = crearEstructuraHTML(donde, caracteristicas);
    return comenzarAEscribirTexto(elemento, textoAEscribir, caracteristicas);
}

function completarConValoresPorDefecto(caracteristicas){
    return { ...CaracteristicasPorDefecto, ...caracteristicas };
}

function crearEstructuraHTML(donde, caracteristicas){
    const elementoDestino=document.getElementById(donde);

    elementoDestino.innerHTML = `
        <span class="estiloTexto   ${caracteristicas.estiloTexto??''}"></span
        ><span class="estiloCursor ${caracteristicas.estiloCursor??''}"
               style="${
                    caracteristicas.velocidadParpadeoCursor > 0 ? 
                        'animation: cursor '+ caracteristicas.velocidadParpadeoCursor+'ms infinite;': ''
               }"
                                  >${caracteristicas.cursor}</span>
    `;
    return elementoDestino;

}

async function comenzarAEscribirTexto(elemento, textoAEscribir, caracteristicas){
    const promise = new Promise( 
        (resolve, reject) => {
            procesarSiguienteLetra(elemento, textoAEscribir, 1, caracteristicas, resolve) 
            ejecutarFuncionSiUnElementoEsBorrado(elemento, 
                ()=> {
                    if (tareasProgramadas.get(elemento)){
                        clearTimeout(tareasProgramadas.get(elemento));
                        reject();
                    }
                }
            );
        
        }
    );


    return promise;

    // Opción 1: Bucle!... para cada letra, la añado... esperando cadencia
    // Opción 2: Recursividad!... escribo una letra, y llamo a la función con el resto del texto
        // Problema de la recursividad? StackOverFlow... En este caso ésto no ocurriría.. ya que las llamadas son asíncronas
        // Es decir, cuando una acaba, no se llama a si misma.. sino que PROGRAMA en el tiempo la ejecución de la siguiente (en base a la cadencia)
        // Que ventaja tiene este follón?
            // Qué pasa si a medias de una palabra.... el usuario pincha en un enlace?
}

function procesarSiguienteLetra(elemento, textoAEscribir, posicionFinal, caracteristicas, resolve){
    tareasProgramadas.delete(elemento);
    escribirEnElHTMLHastaLaLetra(elemento, textoAEscribir, posicionFinal);
    siHayMasLetrasSeguirEscribiendo(elemento, textoAEscribir, posicionFinal, caracteristicas, resolve);
    siNoHayMasLetrasFinalizar(elemento, textoAEscribir, posicionFinal, caracteristicas, resolve);
}

function siHayMasLetrasSeguirEscribiendo(elemento, textoAEscribir, posicionFinal, caracteristicas, resolve){
    if (posicionFinal < textoAEscribir.length){ // Hay que escribir más letras
        const idTarea = setTimeout( 
            ()=> procesarSiguienteLetra(elemento, textoAEscribir, posicionFinal+1, caracteristicas, resolve)
            ,caracteristicas.velocidad
        );
        tareasProgramadas.set(elemento, idTarea);
    }
}

function siNoHayMasLetrasFinalizar(elemento, textoAEscribir, posicionFinal, caracteristicas, resolve){
    if (posicionFinal === textoAEscribir.length){ // No hay que escribir más letras
        enSuCasoOcultarCursor(elemento, caracteristicas);
        resolve();
    }
}

function escribirEnElHTMLHastaLaLetra(elemento, textoAEscribir, posicionFinal){
    const textoAEscribirActualmente = textoAEscribir.substring(0, posicionFinal);
    elemento.querySelector('.estiloTexto').innerText = textoAEscribirActualmente;
}

function enSuCasoOcultarCursor(elemento, caracteristicas){
    if( caracteristicas.ocultarCursorAlFinalizar )
        elemento.querySelector('.estiloCursor').style.visibility = 'hidden';
}

function ejecutarFuncionSiUnElementoEsBorrado(elemento, funcionAEjecutar){
    const observador = new MutationObserver(
        mutaciones => mutaciones.forEach(
                mutacion => mutacion.removedNodes.forEach( 
                    nodoEliminado => nodoEliminado === elemento && funcionAEjecutar()
                )
        )
    );
    observador.observe(elemento.parentNode, {childList: true, subtree: true});
}
