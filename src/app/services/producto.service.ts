import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private endPoint: string = environment.endPoint
  private apiUrl: string = this.endPoint + "Productos"

  constructor(private http: HttpClient) { }

    // Metodo para invocar al endpoint de GET Productos/productos
    getList(): Observable<IProducto[]> {
      return this.http.get<IProducto[]>(`${this.apiUrl}/ListaProductos`)
    }
}
