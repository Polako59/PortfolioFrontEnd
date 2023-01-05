export class Skills {
    id?: number;
    name:string;
    level:number;
    logo:string;

    constructor(name:string, level:number, logo:string){
        this.name = name;
        this.level = level;
        this.logo = logo;
    }
}
