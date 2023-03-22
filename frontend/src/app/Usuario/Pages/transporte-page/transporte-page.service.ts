import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ShowBussinessType } from '../../../Admin/Models/salud';

@Injectable({
  providedIn: 'root',
})
export class TransporteService {
  constructor(private http: HttpClient) {}

  list(): Observable<ShowBussinessType[]> {
    return this.http.get<ShowBussinessType[]>(
      `${environment.url}empresa-user/transporte`
    );
  }
}

