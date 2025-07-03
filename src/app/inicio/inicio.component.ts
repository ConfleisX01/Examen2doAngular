import { Component } from '@angular/core';
import { ProductoComponent } from '../producto/producto.component';
import { IProducto } from '../interfaces/producto';
import { ProductoService } from '../services/producto.service';
import { NgFor, SlicePipe } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-inicio',
  imports: [ProductoComponent, NgFor, SlicePipe],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  listaProductos: IProducto[] = []
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
          console.log(this.listaProductos)
        }, error:(e) => { console.error(e) }
      })
    }
}
