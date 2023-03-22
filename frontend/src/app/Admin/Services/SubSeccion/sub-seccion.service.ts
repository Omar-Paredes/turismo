import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IsFocusableConfig } from 'ngx-bootstrap/focus-trap/interactivity-checker';
import { Observable } from 'rxjs';
import { ISubSeccion } from '../../Models/sub-seccion';
import { environment } from 'src/environments/environment';
import { IAtractivo } from '../../Models/atractivo';
import IAtractivoSubSeccion from '../../Models/atratctivoSubSeccion';
import AtractivoSeccionesAsignadasType from '../../Models/atractivoSeccionesAsigandas.moldes';
@Injectable({
  providedIn: 'root'
})
export class SubSeccionService {

  constructor(private http:HttpClient) { }

  list() : Observable<ISubSeccion[]> {
    return this.http.get<ISubSeccion[]>(`${environment.url}sub_seccion`);
  }

  add(subseccion:ISubSeccion) : Observable<ISubSeccion>{
    return this.http.post<ISubSeccion>(`${environment.url}sub_seccion`, subseccion);
  }

  update(subseccion:ISubSeccion) : Observable<ISubSeccion>{
    return this.http.put<ISubSeccion>(`${environment.url}sub_seccion/${subseccion.id}`, subseccion);
  }

  delete(subseccion:ISubSeccion) : Observable<boolean>{
    return this.http.delete<boolean>(`${environment.url}sub_seccion/${subseccion.id}`);
  }

  //--------------------Relación Atractivo SubSeccion------------------------//
  noAsignados(atractivoId: number | undefined): Observable<IAtractivo[]> {
    const resp = this.http.get<IAtractivo[]>(
      `${environment.url}atractivo_secciones_noAsignadas/${atractivoId}`
    );
    return resp;
  }

  addAssigningAtractivos(atractivo: IAtractivoSubSeccion): Observable<ISubSeccion> {
    return this.http.post<any>(
      `${environment.url}atractivo_secciones_noAsignadas/`,
      atractivo
    );
  }

  getAtractivosAssigned(id: number) {
    return this.http.get<AtractivoSeccionesAsignadasType[]>(
      `${environment.url}atractivo_secciones_asignadas/${id}`
    );
  }

  deallocateAtractivos(atractivo: IAtractivoSubSeccion) {
    return this.http.post(
      `${environment.url}atractivo_secciones_asignadas/`,
      atractivo
    );
  }

}
