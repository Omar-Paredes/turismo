import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../../Models/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {   }

  list() : Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${environment.url}usuarios/`);
  }
  updateEstado(usuario:Usuario) : Observable<Usuario>{
    return this.http.put<Usuario>(`${environment.url}usuarios/${usuario.id}`, usuario);
  }
}

