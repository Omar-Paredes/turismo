import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmpresa } from '../../Models/empresa';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private _url = 'http://127.0.0.1:8000/api/empresa';

  constructor(private http:HttpClient) {   }

  list() : Observable<IEmpresa[]> {
    return this.http.get<IEmpresa[]>(`${environment.url}empresa`);
  }

  add(empresa:IEmpresa) : Observable<IEmpresa>{
    return this.http.post<IEmpresa>(`${environment.url}empresa`, empresa);
  }

  update(empresa:IEmpresa) : Observable<IEmpresa>{
    return this.http.put<IEmpresa>(`${environment.url}empresa/${empresa.id}`, empresa);
  }

  delete(empresa:IEmpresa) : Observable<boolean>{
    return  this.http.delete<boolean>(`${environment.url}empresa/${empresa.id}`);
  }
}
