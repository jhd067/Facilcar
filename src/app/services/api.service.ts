import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Listcarros } from '../models/listcarros';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "https://www.indicar.com.co/server_indicar/servicios/serviceIndicar.php?_p_action=externo&action=getClasificado";


  constructor(private http: HttpClient) { }

  getallcars(): Observable<Listcarros> {
    let direccion = this.url;
    return this.http.get<Listcarros>(direccion);
  }
}
