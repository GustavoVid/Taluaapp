import { Component } from '@angular/core';
import { Carrito } from '../../model/carrito.model';
import { CarritoService } from '../../services/carrito.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito-list',
  imports: [],
  templateUrl: './carrito-list.component.html',
  styleUrl: './carrito-list.component.css'
})
export class CarritoListComponent {
  list_carrito: Carrito[] = [];

  constructor(private carritoService: CarritoService,private router: Router){
      carritoService.getCarrito()
      .subscribe(carrito => this.list_carrito = carrito);
    }
}
