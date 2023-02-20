import { Component, OnInit } from '@angular/core';
import { Listcarros } from 'src/app/models/listcarros';
import {ApiService} from'../../services/api.service';
/* import{} from */

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  
  
})

export class HomeComponent implements OnInit {

  carros:Listcarros[ ] = [ ];
  constructor(private api:ApiService){}

  ngOnInit():void{
    /* this.api.getallcars().subscribe(datos=>{
      console.log(datos);
    }) */
    
  } 

}
