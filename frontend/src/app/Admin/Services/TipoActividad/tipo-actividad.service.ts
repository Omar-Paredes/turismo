import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITipoActividad } from '../../Models/tipo_actividad';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoActividadService {

  private _url = 'http://127.0.0.1:8000/api/tipo_actividad';
  constructor(private http:HttpClient) { }

  list() : Observable<ITipoActividad[]> {
    return this.http.get<ITipoActividad[]>(`${environment.url}tipo_actividad`);
  }

  // Agregar

  add(tipo:ITipoActividad) : Observable<ITipoActividad[]> {
    return this.http.post<ITipoActividad[]>(`${environment.url}tipo_actividad`, tipo);
  }

  // Modificar

  update(tipo:ITipoActividad) : Observable<ITipoActividad> {
    return this.http.put<ITipoActividad>(`${environment.url}tipo_actividad/${tipo.id}`, tipo);
  }

  delete(tipo:ITipoActividad) : Observable<boolean> {
    return this.http.delete<boolean>(`${environment.url}tipo_actividad/${tipo.id}`);
  }

}
