export class Persona{
    id?: number;
    nombres: String;
    apellido: String;
    fechaNacimiento: String;
    nacionalidad: String;
    mail: String;
    acercaDe: String;
    ocupacion: String;
    image_background_header: String;
    image_perfil_header: String;

    constructor(nombres: String, apellido: String,fechaNacimiento: String, nacionalidad: String, 
        mail: String, acercaDe: String, ocupacion: String, 
        image_background_header: String, image_perfil_header: String){
            this.nombres= nombres;
            this.apellido= apellido;
            this.fechaNacimiento= fechaNacimiento;
            this.nacionalidad= nacionalidad;
            this.mail= mail;
            this.acercaDe= acercaDe;
            this.ocupacion= ocupacion;
            this.image_background_header= image_background_header;
            this.image_perfil_header= image_perfil_header;
        }
}