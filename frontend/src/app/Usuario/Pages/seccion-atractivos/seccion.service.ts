import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShowBussinessType, SubseccionPageResponse } from '../../../Admin/Models/salud';

@Injectable({
  providedIn: 'root',
})
export class ServicioToUserService {
  constructor(private http: HttpClient) {}

  list(id:string | null): Observable<SubseccionPageResponse> {
    return this.http.get<SubseccionPageResponse>(`${environment.url}atractivo-user/${id}`);
  }
}
