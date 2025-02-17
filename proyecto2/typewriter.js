
class Typewriter {

    static CaracteristicasPorDefecto = {
        velocidad: 100,
        cursor: '_',
        velocidadParpadeoCursor: 500,
        estiloTexto: undefined,
        estiloCursor: undefined,
        ocultarCursorAlFinalizar: false
    }

    constructor(elemento, textoAEscribir, caracteristicas, promesa){
        this.elemento = elemento;
        this.textoAEscribir = textoAEscribir;
        this.promesa = promesa;
        this.caracteristicas = caracteristicas;
        this.posicionPorLaQueVoy=0;
        this.siguienteTareaProgramadaId = undefined;
        
        this.ejecutarFuncionSiUnElementoEsBorrado( 
            ()=> {
                    this.siguienteTareaProgramadaId && clearTimeout(this.siguienteTareaProgramadaId);
                    this.promesa.reject();
                }
        );

    }

    siguienteLetra(){
        this.siguienteTareaProgramadaId = undefined;
        this.posicionPorLaQueVoy++;
    }

    heAcabadoDeEscribir(){
        return this.posicionPorLaQueVoy === this.textoAEscribir.length;
    }

    procesarSiguienteLetra(){
        this.siguienteLetra();
        this.escribirEnElHTMLHastaLaLetra();
        this.siHayMasLetrasSeguirEscribiendo();
        this.siNoHayMasLetrasFinalizar();
    }

    siHayMasLetrasSeguirEscribiendo(){
        if (!this.heAcabadoDeEscribir()){ // Hay que escribir más letras
            this.siguienteTareaProgramadaId = setTimeout( 
                                                                    ()=> this.procesarSiguienteLetra()
                                                                    ,this.caracteristicas.velocidad
                                                                );
        }
    }

    siNoHayMasLetrasFinalizar(){
        if (this.heAcabadoDeEscribir()){ // No hay que escribir más letras
            this.enSuCasoOcultarCursor();
            this.promesa.resolve();
        }
    }

    escribirEnElHTMLHastaLaLetra(){
        const textoAEscribirActualmente = this.textoAEscribir.substring(0, this.posicionPorLaQueVoy);
        this.elemento.querySelector('.estiloTexto').innerText = textoAEscribirActualmente;
    }

    enSuCasoOcultarCursor(){
        if( this.caracteristicas.ocultarCursorAlFinalizar )
            this.elemento.querySelector('.estiloCursor').style.visibility = 'hidden';
    }

    ejecutarFuncionSiUnElementoEsBorrado(funcionAEjecutar){
        const observador = new MutationObserver(
            mutaciones => mutaciones.forEach(
                    mutacion => mutacion.removedNodes.forEach( 
                        nodoEliminado => nodoEliminado === this.elemento && funcionAEjecutar()
                    )
            )
        );
        observador.observe(this.elemento.parentNode, {childList: true, subtree: true});
    }

    static configurarPromesa(){
        const funcionesDeLaPromesa = { resolve: undefined, reject: undefined };
        const promesa = new Promise( (resolve, reject) => {
            funcionesDeLaPromesa.resolve = resolve;
            funcionesDeLaPromesa.reject = reject;
        });
        return { promesa, funcionesDeLaPromesa };
    }

    static generoElementoDelTypeWriter(elemento, textoAEscribir, caracteristicas, promesa){
        return new Typewriter(elemento, textoAEscribir, caracteristicas, promesa);
    }

    static completarConValoresPorDefecto(caracteristicas){
        return { ...Typewriter.CaracteristicasPorDefecto, ...caracteristicas };
    }

    static crearEstructuraHTML(donde, caracteristicas){
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
}





async function escribirPocoAPoco( textoAEscribir, donde, caracteristicas = {} ){
    const { promesa, funcionesDeLaPromesa } = Typewriter.configurarPromesa();
    caracteristicas = Typewriter.completarConValoresPorDefecto(caracteristicas);
    const elemento  = Typewriter.crearEstructuraHTML(donde, caracteristicas);
    const typewriter = Typewriter.generoElementoDelTypeWriter(elemento, textoAEscribir, caracteristicas, funcionesDeLaPromesa);
    typewriter.procesarSiguienteLetra(typewriter);
    return promesa;
}