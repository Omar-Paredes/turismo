import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRestriccion } from '../../Models/restriccion';

@Injectable({
  providedIn: 'root'
})
export class RestriccionService {

  private _url = 'http://127.0.0.1:8000/api/restriccion';

  constructor(private http:HttpClient) {   }

  list() : Observable<IRestriccion[]> {
    return this.http.get<IRestriccion[]>(this._url);
  }

  add(restriccion:IRestriccion) : Observable<IRestriccion>{
    return this.http.post<IRestriccion>(this._url, restriccion);
  }

  update(restriccion:IRestriccion) : Observable<IRestriccion>{
    return this.http.put<IRestriccion>(`${this._url}/${restriccion.id}`, restriccion);
  }

  delete(restriccion:IRestriccion) : Observable<boolean>{
    return  this.http.delete<boolean>(`${this._url}/${restriccion.id}`);
  }
}
