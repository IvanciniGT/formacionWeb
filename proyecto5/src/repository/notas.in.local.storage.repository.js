// Operaciones CRUD básicas sobre un tipo de dato... persistible
import { NotasInRAMRepository } from './notas.in.ram.repository.js';
export class NotasInLocalStorageRepository extends NotasInRAMRepository{

  constructor() {
    super();
    this.leerNotasDelLocalStorage();
  }

  addNota(nota) {
    const nuevaNota = super.addNota(nota);
    // No la meto en el localSotage()
    this.persistirNotasEnLocalStorage();
    return nuevaNota;
  }

  updateNota(nota) {
    super.updateNota(nota);
    this.persistirNotasEnLocalStorage();
  }

  deleteNota(nota) {
    super.deleteNota(nota);
    this.persistirNotasEnLocalStorage();
    this.persistirNotasBorradasEnLocalStorage();
  }

  restoreNota(nota) {
    super.restoreNota(nota);
    this.persistirNotasEnLocalStorage();
    this.persistirNotasBorradasEnLocalStorage();
  }

  vaciarPapelera() {
    super.vaciarPapelera();
    this.persistirNotasBorradasEnLocalStorage();
  }

  persistirNotasEnLocalStorage(){
    localStorage.setItem("notas", JSON.stringify(this.notas));
  }

  persistirNotasBorradasEnLocalStorage(){
    localStorage.setItem("notasBorradas", JSON.stringify(this.notasEnPapelera));
  }

  leerNotasDelLocalStorage(){
    this.notas = JSON.parse(localStorage.getItem("notas")) || [];
    this.notasEnPapelera = JSON.parse(localStorage.getItem("notasBorradas")) || [];
  }

}
