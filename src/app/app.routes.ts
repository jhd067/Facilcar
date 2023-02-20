import { RouterModule,Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BusquedaComponent } from "./components/busqueda/busqueda.component";
import { ContactenosComponent } from "./components/contactenos/contactenos.component";
import { FinanciaComponent } from "./components/financia/financia.component";
import { HomeComponent } from "./components/home/home.component";
import { PlanesComponent } from "./components/planes/planes.component";






const  APP_ROUTES: Routes=[
    {path:'home', component:HomeComponent},
    {path:'busqueda', component:BusquedaComponent},
    {path:'about', component:AboutComponent},
    {path:'contactenos', component:ContactenosComponent},
    {path:'financia', component:FinanciaComponent},    
    {path:'planes', component:PlanesComponent}, 
    {path:'**', pathMatch:'full',redirectTo:'home'}

]
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)