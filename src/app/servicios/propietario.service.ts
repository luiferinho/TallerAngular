import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPropietario } from '../modelos/propietario.modelo';
import { SeguridadModule } from '../modulos/seguridad/seguridad.module';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PropietarioService {
  
  url="http://localhost:3000";
  token : string ='';
  constructor(private http: HttpClient, private seguridadServicio: SeguridadService) { 
    this.token = this.seguridadServicio.ObternerToken();
  }

  ObtenerRegistros(): Observable<ModeloPropietario[]>{
    return this.http.get<ModeloPropietario[]>(`${this.url}/propietarios`)

  }

  CrearPropietario(propietario: ModeloPropietario):Observable<ModeloPropietario>{
    return this.http.post<ModeloPropietario>(`${this.url}/propietarios`,propietario, {
      headers: new HttpHeaders({
        'Atorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarPropietario(propietario: ModeloPropietario):Observable<ModeloPropietario>{
    return this.http.put<ModeloPropietario>(`${this.url}/propietarios`,propietario, {
      headers: new HttpHeaders({
        'Atorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarPropietarios(id: string):Observable<any>{
    return this.http.delete(`${this.url}/propietarios/${id}`, {
      headers: new HttpHeaders({
        'Athorization': `Bearer ${this.token}`
      })
    })
  }

  postData( datos: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    const httpOptions = {
      headers,
    };

    return this.http.post("http://localhost:3000/propietarios", datos, httpOptions);
  }
}
