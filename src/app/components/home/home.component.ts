import { Component, OnInit } from '@angular/core';
import { Listcarros } from 'src/app/models/listcarros';
import {ApiService} from'../../services/api.service';
/* import{} from */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  
})

export class HomeComponent implements OnInit {
  public carros: Listcarros | undefined;
  loading:boolean;

  
  constructor(private api:ApiService){
   this.loading=true;
  }

  async getCars() {
    await this.api.getallcars().subscribe(data => {
      this.carros = data; 
      console.log(data);
      this.loading=false;
      
    });
  }

  ngOnInit(): void {
    this.getCars();
  }


}
