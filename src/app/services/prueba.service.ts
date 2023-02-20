import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Listpacientes} from '../models/listpaciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  
  url:string="https://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }
  getallpacientes():Observable<Listpacientes>{
    let direccion=this.url;
    return this.http.get<Listpacientes>(direccion);
  }
}
