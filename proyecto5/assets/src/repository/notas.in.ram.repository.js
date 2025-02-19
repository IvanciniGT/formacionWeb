// Operaciones CRUD básicas sobre un tipo de dato... persistible

export class NotasInRAMRepository {

  constructor() {
    this.notas = [];
    this.notasEnPapelera = [];
  }

  addNota(nota) {
    // El repo debe establecer un id único para cada nota
    if (nota.id){
      console.error("No se puede agregar una nota que ya tiene un id");
      throw new Error("No se puede agregar una nota que ya tiene un id");
    }
    nota.id = NotasInRAMRepository.getUniqueID();
    this.notas.push(nota);
    return nota;
  }

  updateNota(nota) {
    const index = this.notas.findIndex(n => n.id === nota.id);
    if(index === -1) {
      console.error("No se puede actualizar una nota que no existe");
      throw new Error("No se puede actualizar una nota que no existe");
    }
    this.notas[index] = nota;
  }

  getNotas() {
    return this.notas;
  }

  getNotasEnPapelera() {
    return this.notasEnPapelera
  }

  deleteNota(nota) {
    if(this.getNotaById(nota.id) === undefined) {
      console.error("No se puede eliminar una nota que no existe");
      throw new Error("No se puede eliminar una nota que no existe");
    }
    this.notas = this.notas.filter(n => n !== nota);
    this.notasEnPapelera.push(nota);
  }

  getNotaById(id) {
    return this.notas.find(n => n.id === id);
  }
  getNotaEnPapeleraDeReciclajeById(id) {
    return this.notasEnPapelera.find(n => n.id === id);
  }

  restoreNota(nota) {
    if(this.getNotaEnPapeleraDeReciclajeById(nota.id) === undefined) {
      console.error("No se puede restaurar una nota que no está en la papelera");
      throw new Error("No se puede restaurar una nota que no está en la papelera");
    }
    this.notasEnPapelera = this.notasEnPapelera.filter(n => n !== nota);
    this.notas.push(nota);
  }

  vaciarPapelera() {
    this.notasEnPapelera = [];
  }

  static getUniqueID() {
    return (""+Math.random()*Math.random()+Math.random()).substring(0, 12);
  }

}

// Esa persistencia en V1, donde se está realizando?
// En un array en RAM, que se pierde al recargar la página.

// En una siguiente versión las guardaremos en la memoria persistente del navegador.
// Pero para eso necesitamos aprender a usar el LocalStorage.

// en una próxima versión, las guardaremos en un servidor remoto.
// Pero para eso necesitamos aprender a usar el Fetch API.