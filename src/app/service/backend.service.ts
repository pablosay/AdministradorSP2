import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { adminList, respuestaPublicacion, Response } from '../Modelos/modelos';
import { environment } from 'src/environments/environment';
const BackEndApi = environment.urlBackend;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  login(){
    let url:string = BackEndApi + "/adminInfo";
    return this.http.get<adminList>(url,httpOptions);
  }

  imagenesNoAprobadas(){
    let url:string = BackEndApi + "/imagenesNoAprovadas";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  videosNoAprobados(){
    let url:string = BackEndApi + "/videosNoAprovados";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  musicaNoAprobada(){
    let url:string = BackEndApi + "/musicaNoAprovada";
    return this.http.get<respuestaPublicacion>(url, httpOptions);
  }

  eliminarPublicacion(key:string){
    let url:string = BackEndApi + "/eliminar/" + key;
    return this.http.delete<Response>(url,httpOptions);
  }

  aprobarPublicacion(key:string){
    let url:string = BackEndApi + "/aprobar/" +key;
    return this.http.put<Response>(url,httpOptions);
  }
}
