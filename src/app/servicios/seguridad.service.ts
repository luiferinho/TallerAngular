import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModeloDatos } from '../modelos/datos.modelo';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  url = "http://localhost:3000/";
  datosUsuariosEnSesion= new BehaviorSubject<ModeloIdentificar>(new ModeloIdentificar());

  constructor(private http: HttpClient) { 
    this.VerificarSesionActual();
  }

  VerificarSesionActual(){
    let datos = this.ObtenerInformacionSesion();
    if(datos){
      this.RefrescarDatosSesion(datos);
    }
  }

  RefrescarDatosSesion(datos: ModeloIdentificar){
    this.datosUsuariosEnSesion.next(datos);
  }

  identificar(usuario: string, clave: string):Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`http://localhost:3000/IdentificarPropietario`,{
      usuario : usuario,
      clave:clave
    },{
      headers: new HttpHeaders({

      })
    })

  }

  AlmacenarSesion(datos: ModeloIdentificar){
    datos.estaIdentificado = true;
    let stringDatos = JSON.stringify(datos);
    localStorage.setItem("datosSesion", stringDatos);
    this.RefrescarDatosSesion(datos);
  }

  ObtenerInformacionSesion(){
    let datosString= localStorage.getItem("datosSesion");
    if (datosString){
      let datos = JSON.parse(datosString);
      return datos
    }else{
      return null
    }
  }

  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion")
    this.datosUsuariosEnSesion.next(new ModeloIdentificar());    
  }

  SeHaIniciadoSesion(){
    let datosString= localStorage.getItem("datosSesion");   
    return datosString;

  }

  ObtenerDatosUsuarioEnSesion(){
    return this.datosUsuariosEnSesion.asObservable();
  }

  ObternerToken(){
    let datosString= localStorage.getItem("datosSesion");
    if(datosString){
      let datos= JSON.parse(datosString);
      return datos.tk
    }else{
      return ''
    }
  }
}
