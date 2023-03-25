import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_ROUTING } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FinanciaComponent } from './components/financia/financia.component';
import { PlanesComponent } from './components/planes/planes.component';
import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { LoadingComponent } from './components/shared/loading/loading.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    FinanciaComponent,
    PlanesComponent,
    ContactenosComponent,
    FooterComponent,
    SidebarComponent,
    BusquedaComponent,
    LoadingComponent,
   

    
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
