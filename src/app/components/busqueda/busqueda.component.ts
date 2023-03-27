import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Listcarros } from 'src/app/models/listcarros';
import { ApiService } from '../../services/api.service';




@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',

})
export class BusquedaComponent implements OnInit {
  public carros: Listcarros | undefined;
  loading:boolean;

  constructor(private api: ApiService) {
    this.loading=true;
  }

  async getCars() {
    await this.api.getallcars().subscribe(data => {
      this.carros = data; 
      
      this.loading=false;
    });
  }
  viewcar(item: any){
    console.log(Object);

  }

  ngOnInit(): void {
    this.getCars();
  }

}
