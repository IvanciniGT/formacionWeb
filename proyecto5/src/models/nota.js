// En este caso, una Entidad: Una clase / objeto PERSISTIBLE
export class Nota {
    
    constructor(texto, posicion, ancho, color, id = undefined){
        this.id = id;
        this.texto = texto;
        this.color = color;
        this.posicion = posicion;
        this.ancho = ancho;
    }

}