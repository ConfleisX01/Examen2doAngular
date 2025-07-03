import { Component, Input } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { IProducto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-listado-productos',
  imports: [ProductoComponent, NgFor],
  templateUrl: './listado-productos.component.html',
  styleUrl: './listado-productos.component.css'
})
export class ListadoProductosComponent {
  @Input() productos: IProducto[] = []
}