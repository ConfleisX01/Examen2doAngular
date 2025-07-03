import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProducto } from '../interfaces/producto';
import { FooterComponent } from "../footer/footer.component";
import { ProductoService } from '../services/producto.service';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-producto',
  imports: [NgIf, NgFor],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {
  @Input() mostrarBoton: boolean = true
  @Input() nombre: string = ""
  @Input() descripcion: string = ""
  @Input() precio: number = 0
  @Input() imagen: string = ""
  @Input() categoria: number = 0

  public endpoint = environment.staticUrl
}
