function funcionQueSeEjecutaraEnElFuturoYQueEsLaQueRealmenteTardaCincoSegundos(resolve, reject){
    setTimeout( () => reject( "Ivan" )  , 5000);
}

async function funcionQueTardaCincoSegundosEnEjecutarse(){
    const promesa = new Promise( funcionQueSeEjecutaraEnElFuturoYQueEsLaQueRealmenteTardaCincoSegundos );
    return promesa;
}

async function ejecutar(){
    const promesa = funcionQueTardaCincoSegundosEnEjecutarse();
    console.log("Ya he llamado a la función que tarda 5 segundos en ejecutarse");

    console.log("Mientras aquello se ejecuta... puedo yo ejecutar otras cosas");
    const numero1 = 5;
    const numero2 = 7;
    const calculo = numero1 + numero2;
    console.log("El cálculo es: ", calculo);

    try{
        const valorDevuelto = await promesa;
        console.log("Ya tengo resultado: ", valorDevuelto);
        console.log("Y ahora podría hacer algo con el resultado");
        console.log("HOLA, "+valorDevuelto);
    }catch(e){
        console.log("Ha habido un error: ", e);
    }
}

//ejecutar();


function ejecutar2(){
                                                // En este momento dejo PROGRAMADO lo que quiero ejecutar
                                                // cuando la función que tarda 5 segundos en ejecutarse
                                                // haya terminado de ejecutarse
    funcionQueTardaCincoSegundosEnEjecutarse()
        .then( valor =>{
            console.log("Y ahora podría hacer algo con el resultado");
            console.log("HOLA, "+valor);
        })
        .catch( error => {
            console.log("Ha habido un error: ", error);
        });

    console.log("Ya he llamado a la función que tarda 5 segundos en ejecutarse");
    console.log("Mientras aquello se ejecuta... puedo yo ejecutar otras cosas");
    const numero1 = 5;
    const numero2 = 7;
    const calculo = numero1 + numero2;
    console.log("El cálculo es: ", calculo);

}

ejecutar2();