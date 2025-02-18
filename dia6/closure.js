// CLOSURE: Función que crea otra función interna... y la devuelve como resultado,
// de forma que los argumentos de la primera funciuón, pueden ser usados en la segunda, 
// si necesidad de volver a pasarlos como argumentos.
function generarFuncionSaludadora(nombre) {
    return () => console.log(`Hola ${nombre}`); // Creamos una función que no recibe argumentos.
                                                // Losa argumentos los tiene del contexto en el que la función se creó.
}

const funcionSaludadoraDeIvan = generarFuncionSaludadora('Ivan');
const funcionSaludadoraDeMenchu = generarFuncionSaludadora('Menchu');

funcionSaludadoraDeIvan();
funcionSaludadoraDeMenchu();

funcionSaludadoraDeIvan();
funcionSaludadoraDeIvan();
funcionSaludadoraDeIvan();

const funcionSaludadoraDeFederico = generarFuncionSaludadora('Federico');

funcionSaludadoraDeFederico();
funcionSaludadoraDeIvan();
funcionSaludadoraDeMenchu();
