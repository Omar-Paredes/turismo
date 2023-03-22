import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { IActividad } from "src/app/Admin/Models/actividad";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})
export class QueHacerService {
  constructor (private http: HttpClient) {}

  list(): Observable<IActividad[]> {
    return this.http.get<IActividad[]>(`${environment.url}sub_seccion`);
  }
}