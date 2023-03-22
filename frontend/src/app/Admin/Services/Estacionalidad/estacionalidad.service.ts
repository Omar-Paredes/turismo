import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEstacionalidad } from '../../Models/estacionalidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstacionalidadService {

  constructor(private http:HttpClient) {   }

  list() : Observable<IEstacionalidad[]> {
    return this.http.get<IEstacionalidad[]>(`${environment.url}estacionalidad`);
  }

  add(estacionalidad:IEstacionalidad) : Observable<IEstacionalidad>{
    return this.http.post<IEstacionalidad>(`${environment.url}estacionalidad`, estacionalidad);
  }

  update(estacionalidad:IEstacionalidad) : Observable<IEstacionalidad>{
    return this.http.put<IEstacionalidad>(`${environment.url}estacionalidad/${estacionalidad.id}`, estacionalidad);
  }

  delete(estacionalidad:IEstacionalidad) : Observable<boolean>{
    return  this.http.delete<boolean>(`${environment.url}estacionalidad/${estacionalidad.id}`);
  }
  
}
