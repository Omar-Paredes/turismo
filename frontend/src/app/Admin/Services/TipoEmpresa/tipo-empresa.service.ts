import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITipoEmpresa } from '../../Models/tipo_empresa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpresaService {


  constructor(private http:HttpClient) {   }

  list() : Observable<ITipoEmpresa[]> {
    return this.http.get<ITipoEmpresa[]>(`${environment.url}tipo_empresa`);
  }

  add(tipo_empresa:ITipoEmpresa) : Observable<ITipoEmpresa>{
    return this.http.post<ITipoEmpresa>(`${environment.url}tipo_empresa`, tipo_empresa);
  }

  update(tipo_empresa:ITipoEmpresa) : Observable<ITipoEmpresa>{
    return this.http.put<ITipoEmpresa>(`${environment.url}tipo_empresa/${tipo_empresa.id}`, tipo_empresa);
  }

  delete(tipo_empresa:ITipoEmpresa) : Observable<boolean>{
    return  this.http.delete<boolean>(`${environment.url}tipo_empresa/${tipo_empresa.id}`);
  }
}