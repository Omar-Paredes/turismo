import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IsFocusableConfig } from 'ngx-bootstrap/focus-trap/interactivity-checker';
import { Observable } from 'rxjs';
import { ISeccion } from '../../Models/seccion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeccionService {


  constructor (private http:HttpClient){}

  list() : Observable<ISeccion[]> {
    return this.http.get<ISeccion[]>(`${environment.url}seccion/`);
  }

  add(seccion:ISeccion) : Observable<ISeccion>{
    return this.http.post<ISeccion>(`${environment.url}seccion/`, seccion);
  }

  update(seccion:ISeccion) : Observable<ISeccion>{
    return this.http.put<ISeccion>(`${environment.url}seccion/${seccion.id}`, seccion);
  }

  delete(seccion:ISeccion) : Observable<boolean>{
    return this.http.delete<boolean>(`${environment.url}seccion/${seccion.id}`);
  }

}