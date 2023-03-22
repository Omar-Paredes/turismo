import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  registerUSer(data: any){
    return this.http.post(environment.url+'register/', data);
  }

  login(data: any){
    return this.http.post(environment.url+'login/', data);
  }
}
