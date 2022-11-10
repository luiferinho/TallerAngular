import { Injectable } from '@angular/core';
import { ModeloPropietario } from '../modelos/propietario.modelo';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class CrudService {

  url='http://localhost:3000/';
  token : string ='';
  constructor(private http: HttpClient ) { 
    
  }

  ObtenerRegistros(): Observable<ModeloPropietario[]>{
    return this.http.get<ModeloPropietario[]>(`${this.url}/propietarios`)

  }

  postData( entity: string,datos: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-type': 'application/json',
    });
    const httpOptions = {
      headers,
    };

    return this.http.post(this.url+ entity, datos, httpOptions);
  }

  getData(entidad: string): Observable<any> {
    return this.http.get(this.url + entidad);
  }
}
