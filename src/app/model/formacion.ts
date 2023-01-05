export class Formacion {
    id?: number;
    titulo:string;
    fecha:string;
    institucion:string;
    descripcion:string;
    claseForm:string;

    constructor(titulo:string, fecha:string, institucion:string, descripcion:string, claseForm:string){
        this.titulo = titulo;
        this.fecha = fecha;
        this.institucion = institucion;
        this.descripcion = descripcion;
        this.claseForm = claseForm;
    }
}
