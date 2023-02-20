import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Listcarros } from 'src/app/models/listcarros';
import {ApiService} from'../../services/api.service';


@Component({
  selector: 'app-planes',
  templateUrl: './planes.component.html',
  
})
export class PlanesComponent implements OnInit{
 public carros: Listcarros|undefined;
  constructor(private api:ApiService, private router:Router){}

  ngOnInit():void{
    this.api.getallcars().subscribe(data=>{
      this.carros = data;
      console.log(data);
    })
    
  } 

}
