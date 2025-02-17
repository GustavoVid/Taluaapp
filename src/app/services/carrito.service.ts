import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Carrito } from '../model/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private carrito: Carrito[] = [
    {id:0,
      nameproduct:'',
      cantidad:0,
      price:0
    }
  ];  

  saveCarrito(carrito: Carrito): Observable<Carrito>{
    //TODO guardar en BD
    this.carrito.push(carrito);
    return of (carrito); //todo que devuelva el valor guardado
  }

  getCarrito() : Observable<Carrito[]>{
      return of(this.carrito);
  }
  
}
