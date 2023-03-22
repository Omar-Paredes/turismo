import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccesibilidad } from '../../Models/accesibilidad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccesibilidadService {

  constructor(private http:HttpClient) {   }

  list() : Observable<IAccesibilidad[]> {
    return this.http.get<IAccesibilidad[]>(`${environment.url}accesibilidad`);
  }

  add(accesibilidad:IAccesibilidad) : Observable<IAccesibilidad>{
    return this.http.post<IAccesibilidad>(`${environment.url}accesibilidad`, accesibilidad);
  }

  update(accesibilidad:IAccesibilidad) : Observable<IAccesibilidad>{
    return this.http.put<IAccesibilidad>(`${environment.url}accesibilidad/${accesibilidad.id}`, accesibilidad);
  }

  delete(accesibilidad:IAccesibilidad) : Observable<boolean>{
    return  this.http.delete<boolean>(`${environment.url}accesibilidad/${accesibilidad.id}`);
  }
}