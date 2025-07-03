import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { FooterComponent } from './footer/footer.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { InicioComponent } from "./inicio/inicio.component";
import { ProductoComponent } from './producto/producto.component';
import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CabeceraComponent, 
    FooterComponent, 
    HttpClientModule,
    FormsModule,
    RouterOutlet
  ]
})
export class AppComponent implements OnInit {
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}