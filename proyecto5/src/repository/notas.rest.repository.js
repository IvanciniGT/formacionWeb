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

  updateNota(nota) {
    super.updateNota(nota);
    this.persistirNotasEnServicioRest();
  }

  deleteNota(nota) {
    super.deleteNota(nota);
    this.persistirNotasEnServicioRest();
    this.persistirNotasBorradasEnServicioRest();
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
    ServicioRest.setItem("notas", JSON.stringify(this.notas));
  }

  persistirNotasBorradasEnServicioRest(){
    ServicioRest.setItem("notasBorradas", JSON.stringify(this.notasEnPapelera));
  }

  async leerNotasDelServicioRest(){
    const promesaNotas = this.hacerPeticionGET(RUTA_BASE_API+"/notas");
    const promesaNotasBorradas = this.hacerPeticionGET(RUTA_BASE_API+"/notasBorradas");
    promesaNotas.then( notas => this.notas = notas );
    promesaNotasBorradas.then( notasBorradas => this.notasEnPapelera = notasBorradas );
    return promesaNotas;
  }

  async hacerPeticionDELETE(url){

  }

  async hacerPeticionPOST(url, nota){

  }

  async hacerPeticionPUT(url, nota){

  }

  async hacerPeticionGET(url){
    const promesa = new Promise((resolve, reject) => {
        //  Aquí va el código asíncrono
        setTimeout( 
          ()=> 
                fetch(url) // Esta llamada se hace por método GET
                  .then( respuesta => respuesta.json() )
                  .then( notasJson => {
                    console.log("LLAMANDO POR GET", url, notasJson);
                    resolve(notasJson);
                  })
                  .catch( error => reject(error) )
          , 0);
    });
    return promesa;
  }

}
