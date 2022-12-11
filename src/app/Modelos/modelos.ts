export class Response {
    message:string;
    status: number;
    constructor(message:string, status: number){
        this.message = message;
        this.status = status;
    }
}

export class admin {
    usuario:string;
    password:string;
    constructor(usuario:string,password:string){
        this.usuario = usuario;
        this.password = password;
    }
}

export class adminList {
    message:string;
    status: number;
    admin: admin[];
    constructor(message:string, status: number,admin:admin[]){
        this.message = message;
        this.status = status;
        this.admin = admin;
    }
}

export class publicacion {
    usuario: string;
    nombre: string;
    titulo: string;
    descripcion: string;
    archivo: string;
    fecha: string;
    likes:number;
    constructor(usuario: string, nombre:string ,titulo:string, descripcion: string, archivo:string, fecha: string, likes:number){
        this.usuario = usuario;
        this.nombre = nombre;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.archivo = archivo;
        this.likes = likes;
    }
}

export class respuestaPublicacion {
    message:string;
    status: number;
    publicaciones: publicacion[];
    constructor(message:string, status: number, publicaciones:publicacion[]){
        this.message = message;
        this.status = status;
        this.publicaciones = publicaciones;
    } 
}