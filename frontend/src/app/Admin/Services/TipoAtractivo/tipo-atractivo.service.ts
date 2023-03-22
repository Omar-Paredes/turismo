import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITipoAtractivo } from '../../Models/tipo_atractivo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TipoAtractivoService {


  constructor(private http:HttpClient) {   }

  list() : Observable<ITipoAtractivo[]> {
    return this.http.get<ITipoAtractivo[]>(`${environment.url}tipo_atractivo`);
  }

  add(tipo_atractivo:ITipoAtractivo) : Observable<ITipoAtractivo>{
    return this.http.post<ITipoAtractivo>(`${environment.url}tipo_atractivo`, tipo_atractivo);
  }

  update(tipo_atractivo:ITipoAtractivo) : Observable<ITipoAtractivo>{
    return this.http.put<ITipoAtractivo>(`${environment.url}tipo_atractivo/${tipo_atractivo.id}`, tipo_atractivo);
  }

  delete(tipo_atractivo:ITipoAtractivo) : Observable<boolean>{
    return  this.http.delete<boolean>(`${environment.url}tipo_atractivo/${tipo_atractivo.id}`);
  }
}
