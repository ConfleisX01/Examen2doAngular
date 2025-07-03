import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  @Output() onBuscar = new EventEmitter<string>()
  @Output() onFiltrar = new EventEmitter<string>()

  buscar(event: any) {
    const texto = event.target.value
    this.onBuscar.emit(texto)
  }

  filtrarCategoria(event: any) {
    const categoria = event.target.value
    this.onFiltrar.emit(categoria)
  }
}
