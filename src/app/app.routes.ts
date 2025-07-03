import { RouterModule, Routes } from '@angular/router';
import { ProductosSeccionComponent } from './productos-seccion/productos-seccion.component';
import { NgModule } from '@angular/core';
import { InicioComponent } from './inicio/inicio.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'productos', component: ProductosSeccionComponent },
];
