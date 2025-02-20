// Operaciones CRUD básicas sobre un tipo de dato... persistible
import { NotasInRAMRepository } from './notas.in.ram.repository.js';

const RUTA_BASE_API = "http://localhost:3000";

export class NotasRestRepository extends NotasInRAMRepository{

  constructor() {
    super();
  }

  async recargarNotas(){
    return this.leerNotasDelServicioRest();
  }

  addNota(nota) {
    const nuevaNota = super.addNota(nota);
    // No la meto en el localSotage()
    this.persistirNotasEnServicioRest();
    return nuevaNota;
  }

  async updateNota(nota) {
    super.updateNota(nota);
    return this.hacerPeticionPUT(RUTA_BASE_API+"/notas/"+nota.id, nota);
  }

  async deleteNota(nota) {
    super.deleteNota(nota);
    const promesaDeBorado = this.hacerPeticionDELETE(RUTA_BASE_API+"/notas/"+nota);
    this.persistirNotasBorradasEnServicioRest();
    return promesaDeBorado;
  }

  restoreNota(nota) {
    super.restoreNota(nota);
    this.persistirNotasEnServicioRest();
    this.persistirNotasBorradasEnServicioRest();
  }

  vaciarPapelera() {
    super.vaciarPapelera();
    this.persistirNotasBorradasEnServicioRest();
  }

  persistirNotasEnServicioRest(){
  }

  persistirNotasBorradasEnServicioRest(){
  }

  async leerNotasDelServicioRest(){
    const promesaNotas = this.hacerPeticionGET(RUTA_BASE_API+"/notas");
    const promesaNotasBorradas = this.hacerPeticionGET(RUTA_BASE_API+"/notasBorradas");
    promesaNotas.then( notas => this.notas = notas );
    promesaNotasBorradas.then( notasBorradas => this.notasEnPapelera = notasBorradas );
    return promesaNotas;
  }

  async hacerPeticionDELETE(url){
    const promesa = new Promise((resolve, reject) => {
      //  Aquí va el código asíncrono
          fetch(url, { method: 'DELETE' })
            .then( () => resolve() )
            .catch( error => reject(error) )
    });
    return promesa;  
  }

  async hacerPeticionPOST(url, nota){

  }

  async hacerPeticionPUT(url, nota){
    const promesa = new Promise((resolve, reject) => 
      //  Aquí va el código asíncrono
              fetch(url, {
                            "method": "PUT",
                            "headers": {
                              "Content-Type": "application/json"
                            },
                            "body": JSON.stringify(nota)
                          }
                    )
                .then( response => {
                                      resolve() 
                                    }
                )
                .catch( error => {
                                      reject(error) 
                                    }
                )
            
        );
  return promesa;
}

  async hacerPeticionGET(url){
    const promesa = new Promise((resolve, reject) => {
        //  Aquí va el código asíncrono
        setTimeout( 
          ()=> 
                fetch(url) // Esta llamada se hace por método GET
                  .then( respuesta => respuesta.json() )
                  .then( notasJson => {
                    resolve(notasJson);
                  })
                  .catch( error => reject(error) )
          , 0);
    });
    return promesa;
  }

}
