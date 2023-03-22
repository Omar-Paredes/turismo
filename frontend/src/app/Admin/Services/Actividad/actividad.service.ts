import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IActividad } from '../../Models/actividad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  constructor(private http:HttpClient) {   }

  list() : Observable<IActividad[]> {
    return this.http.get<IActividad[]>(`${environment.url}actividad`);
  }

  add(actividad:IActividad) : Observable<IActividad>{
    return this.http.post<IActividad>(`${environment.url}actividad`, actividad);
  }

  update(actividad:IActividad) : Observable<IActividad>{
    return this.http.put<IActividad>(`${environment.url}actividad/${actividad.id}`, actividad);
  }

  delete(actividad:IActividad) : Observable<boolean>{
    return  this.http.delete<boolean>(`${environment.url}actividad/${actividad.id}`);
  }
}
