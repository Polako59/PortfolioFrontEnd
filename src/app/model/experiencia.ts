export class Experiencia {
    id?: number;
    empresa: string;
    desde: string;
    hasta: string;
    puesto: string;
    tareas:string;
    logo: string;

    constructor(empresa: string, desde:string, hasta:string, puesto:string, tareas:string, logo:string){
        this.empresa = empresa;
        this.desde = desde;
        this.hasta = hasta;
        this.puesto = puesto;
        this.tareas = tareas;
        this.logo = logo;
    }
}
