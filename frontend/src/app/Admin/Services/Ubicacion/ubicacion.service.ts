import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IUbicacion } from '../../Models/ubicacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private http:HttpClient) {   }

  list() : Observable<IUbicacion[]> {
    return this.http.get<IUbicacion[]>(`${environment.url}ubicacion`);
  }

  add(ubicacion:IUbicacion) : Observable<IUbicacion>{
    return this.http.post<IUbicacion>(`${environment.url}ubicacion`, ubicacion);
  }

  update(ubicacion:IUbicacion) : Observable<IUbicacion>{
    return this.http.put<IUbicacion>(`${environment.url}ubicacion/${ubicacion.id}`, ubicacion);
  }

  delete(ubicacion:IUbicacion) : Observable<boolean>{
    return  this.http.delete<boolean>(`${environment.url}ubicacion/${ubicacion.id}`);
  }
}
