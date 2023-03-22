import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITipoRestriccion } from '../../Models/tipo_restriccion';

@Injectable({
  providedIn: 'root'
})
export class TipoRestriccionService {

  private _url = 'http://127.0.0.1:8000/api/tipo_restriccion';

  constructor(private http:HttpClient) {   }

  list() : Observable<ITipoRestriccion[]> {
    return this.http.get<ITipoRestriccion[]>(this._url);
  }

  add(tipo_restriccion:ITipoRestriccion) : Observable<ITipoRestriccion>{
    return this.http.post<ITipoRestriccion>(this._url, tipo_restriccion);
  }

  update(tipo_restriccion:ITipoRestriccion) : Observable<ITipoRestriccion>{
    return this.http.put<ITipoRestriccion>(`${this._url}/${tipo_restriccion.id}`, tipo_restriccion);
  }

  delete(tipo_restriccion:ITipoRestriccion) : Observable<boolean>{
    return  this.http.delete<boolean>(`${this._url}/${tipo_restriccion.id}`);
  }
}
