
// La cosa es que puede ser que yo quiera crear una función que en un momento devuelva un valor...
// Pero que calcular/obtener ese valor, lleve rato

// - Quiero llamar a un servicio web... y capturar su salida... puede tardar 500ms-5segundos... 50 segundos.
// - Quizás quiero hacer un calculo pesado...

// Mientras ese dato / actividad se completa, yo quiero seguir haciendo cosas.

async function calcularNumeroComplejo(){ // Esto tarda 5 segundos en calcularse
    return 47;
}


async function calcularNumeroComplejo(){ // Esto tarda 5 segundos en calcularse
    const promesa = new Promise( (resolve, reject) => {
                                                        // AQUI ESTARA EL TRABAJO PESADO
                                                        resolve(47) 
                                                       });
    return promesa;                 // FUNCIONES
}

// La promesa la interpreto com un pagaré... como un "VALE POR"... que en algún momento te entregaré .. O NO!!!


async function ejecutar(){
    const promesaDevuelta = calcularNumeroComplejo();

    console.log("Promesa devuelta, recién ejecutada la función: ", promesaDevuelta);

    console.log("Estamos calculando... espera."); // CUANTO tiempo tarda en salir ESTE MENSAJE? 5 segundos

    console.log("Promesa devuelta antes del await: ", promesaDevuelta);
    const valorDeDentroDeLaPromesa = await promesaDevuelta; // Quizás voy  esperar 20 minutos.. o 2 días.
        // Bloquea el flujo de ejecución normal del programa, 
        // liberando recursos para que se ejecute la promesa
        // Además, espera a que la promesa haya sido resuelta (RESOLVE) o rechazada (REJECT)
        // Antes de continuar.
        // Es más, lo que sea que se haya resuelto, o rechazado, es devuelto por el await
    console.log("Promesa devuelta después del await: ", promesaDevuelta, valorDeDentroDeLaPromesa);
}

//ejecutar();
// Pues yo no quiero esperar a que se calcule el número complejo... para seguir con mi programa.

// AQUI ENTRAN LAS PROMESAS, que ban de la mano con las palabras async y await

// Una funcion asincrona (en js, la creamos usando la palabra async delante de la palabra function) es una función que:
// 1. No se ejecuta de forma secuencial en nuestro programa... 
//    Se solicita su ejecución... y cuando haya momento (cuando no esté haciendo otra cosa), se ejecuta.
// 2. es una función que DEBE DEVOLVER UNA PROMESA... SIEMPRE
//    JS en este sentido me lo pone fácil. Si creo una función async que no devuelve una promesa, 
//    JS en automático, modifica el código por mi, para que devuelva una promesa

function funcionQueSeEjecutaraEnElFuturoYQueEsLaQueRealmenteTardaCincoSegundos(resolve, reject){
    setTimeout( () => resolve()  , 5000);
}

async function funcionQueTardaCincoSegundosEnEjecutarse(){
    const promesa = new Promise( funcionQueSeEjecutaraEnElFuturoYQueEsLaQueRealmenteTardaCincoSegundos );
    return promesa;
}


async function ejecutarAhora(){
    console.log("Llama a la función que tarda 5 segundos en ejecutarse");
    const promesa = funcionQueTardaCincoSegundosEnEjecutarse();
    console.log("Promesa devuelta: ", promesa);
    await promesa;
    console.log("Promesa resuelta", promesa);
}

ejecutarAhora();