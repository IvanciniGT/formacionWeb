async function esperar(tiempo){
    return new Promise( (resolve, reject) => {
                                                setTimeout( () => resolve(), tiempo);
                                             }
                      );
}

class Contador {

    constructor(nombre, maximo, cadencia){
        console.log("Acabas de crear al contador: "+ nombre, " que contará hasta " +
             maximo +" esperando entre número y número " + cadencia + " milisegundos");
        this.nombre = nombre;
        this.maximo = maximo;
        this.cadencia = cadencia;
    }

    async comienza(){
        console.log(this.nombre+ " comienza a contar");
        for(let i = 1; i <= this.maximo; i++){
            console.log("Soy "+this.nombre+ " y voy por el número " + i);
            // Esperar cadencia
            await esperar(this.cadencia);
        }
        console.log(this.nombre+ " ha terminado de contar");
    }

}

const contador1 = new Contador("Federico", 20, 1000);
contador1.comienza();


const contador2 = new Contador("Menchu", 10, 1500);
contador2.comienza();