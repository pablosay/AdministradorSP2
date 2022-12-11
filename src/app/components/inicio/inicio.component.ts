import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';
import { publicacion } from 'src/app/Modelos/modelos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  imagenes: publicacion[];
  videos: publicacion[];
  musica: publicacion[];
  server:string;
  constructor(private backend: BackendService, private router: Router) {
    this.server = "http://localhost:3000/file/";
    this.imagenes = [];
    this.videos = [];
    this.musica = [];
  }
  
  ngOnInit(): void {
    this.backend.imagenesNoAprobadas().subscribe(response => {
      this.imagenes = response.publicaciones;
      for(let publicacion of this.imagenes){
        publicacion.fecha = publicacion.fecha.substring(0,10);
        if(publicacion.titulo == null)
          publicacion.titulo = "No hay titulo disponible";
        if(publicacion.descripcion == null)
          publicacion.descripcion = "No hay descripción disponible";
      }
    });
    this.backend.musicaNoAprobada().subscribe(response => {
      this.musica = response.publicaciones;
      for(let publicacion of this.musica){
        publicacion.fecha = publicacion.fecha.substring(0,10);
        if(publicacion.titulo == null)
          publicacion.titulo = "No hay titulo disponible";
        if(publicacion.descripcion == null)
          publicacion.descripcion = "No hay descripción disponible";
      }
    })
    this.backend.videosNoAprobados().subscribe(response => {
      this.videos = response.publicaciones;
      for(let publicacion of this.videos){
        publicacion.fecha = publicacion.fecha.substring(0,10);
        if(publicacion.titulo == null)
          publicacion.titulo = "No hay titulo disponible";
        if(publicacion.descripcion == null)
          publicacion.descripcion = "No hay descripción disponible";
      }
    })
  }

  aprobar(key:string){
    this.backend.aprobarPublicacion(key).subscribe(res => {
      if(res.status == 1){
        alert("Archivo aprobado");
      }
    })
    this.router.navigateByUrl('/inicio');
  }

  eliminar(key:string){
    this.backend.eliminarPublicacion(key).subscribe(res => {
      if(res.status == 1){
        this.router.navigateByUrl('/inicio');
      }
    })
  }

}
