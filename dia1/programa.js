// Imperativo
var texto = "Ivan";
console.log(texto);

// Procedural
function saluda(nombre){
  console.log("Hola " + nombre);
}
saluda("Ivan");

// Funcional
var miVariable = saluda; // Referenciando a la función desde una variable
miVariable("Ivan");      // Ejecutar la función desde la variable

function generarSaludoFormal(nombre){
    return "Hola " + nombre;
  }

function generarSaludoInformal(nombre){
    return "Qué pasa " + nombre;
}

function imprimirSaludo(funcionGeneradoraDeSaludos, nombre){
    console.log(funcionGeneradoraDeSaludos(nombre));
}

imprimirSaludo(generarSaludoFormal, "Menchu");     

imprimirSaludo(generarSaludoInformal, "Federico");

// La programación funcional me permite crear funciones donde parte de la LOGICA la suministra
// como un argumento de la función. 

// Hasta ahora os he enseñado la forma TRADICIONAL de definir FUNCIONES en JS:

function doblar(numero){
    return numero * 2;
}

// Pero en JS hay otra sintaxis que ofrece el lenguaje para definir funciones.
// Lo llamamos Expresiones Lambda y se crean con el operador => ARROW ... 
// También llamamos a estas funciones Arrow Functions
// Las arrow funcions son EXPRESIONES... qué es una expresión en un lenguaje de programación (el que sea);

var otroTexto = "Hola Mundo"; // Statement (Sentencia, declaración... orden, frase... en JS)

var numero = 3+78;            // Otro Statement
             //// Expresión: Trozo de código que devuelve un valor

// Una expresión lambda es ante todo una EXPRESION... es decir un trozo de código que devuelve un valor.
// Qué valor devuelve una expresión lambda? Devuelve una función definida dentro de la expresión lambda....
// Una función eso si... que no tiene nombre (es anónima)
var miFuncion = doblar;
console.log(miFuncion(3));

var miFuncion2 = (numero) => {
    return numero * 3;
} // Eso es una expresión lambda, creada con el operador =>

console.log(miFuncion2(3));
console.log(miFuncion2(4));
console.log(miFuncion2(7));


var miFuncion3 = numero => {
    return numero * 3;
} 
console.log(miFuncion3(10));


var miFuncion4 = numero =>  numero * 3; 
console.log(miFuncion4(20));

console.log((numero =>  numero * 3)(30));

function imprimirHolaMundo(){
    console.log("Hola Mundo");
}











setTimeout(     () =>  console.log("Hola Mundo de JS")    , 2000); // Imprimir a los 2 segundos HOLA MUNDO
console.log("Adios mundo cruel!!!");
