import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Listcarros } from 'src/app/models/listcarros';
import { Listpacientes } from '../../models/listpaciente';
import { ApiService } from '../../services/api.service';
import { PruebaService } from '../../services/prueba.service';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent implements OnInit {
  public carros: Listcarros | undefined;

  constructor(private api: ApiService) {
  }

  async getCars() {
    await this.api.getallcars().subscribe(data => {
      this.carros = data; 
      console.log(data);
      
    });
  }

  ngOnInit(): void {
    this.getCars();
  }

}
