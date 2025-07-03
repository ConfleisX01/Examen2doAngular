import { Component, OnInit } from '@angular/core';
import { BuscadorComponent } from '../buscador/buscador.component';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';
import { ProductoComponent } from '../producto/producto.component';
import { IProducto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-productos-seccion',
  imports: [BuscadorComponent, ListadoProductosComponent, FormsModule],
  templateUrl: './productos-seccion.component.html',
  styleUrl: './productos-seccion.component.css'
})
export class ProductosSeccionComponent {
    listaProductos: IProducto[] = []
    productosFiltrados: IProducto[] = []
    isResultLoaded: boolean = false
    isUpdateActiva: boolean = true
  
    constructor(private _productoService: ProductoService) {
      this.obtenerProductos()
    }

    obtenerProductos() {
      this._productoService.getList().subscribe({
        next: (data) => {
          this.listaProductos = data
          this.isResultLoaded = true
          this.productosFiltrados = this.listaProductos
        }, error:(e) => { console.error(e) }
      })
    }

    filtrarProductos(termino: string) {
      this.productosFiltrados = this.listaProductos.filter(producto => 
        producto.nombre.toLowerCase().includes(termino.toLowerCase())
      )
    }

    categoriaProductos(categoria: string) {
      this.productosFiltrados = this.listaProductos.filter(producto =>
        producto.categoria.toString().includes(categoria.toString())
      )
    }
}
