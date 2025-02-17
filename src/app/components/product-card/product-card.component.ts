import { Component,EventEmitter,Input,Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../model/product.model';
import { Carrito } from '../../model/carrito.model';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  template: `<div class="card" style="background-color: rgb(29, 11, 92); color rgb(252, 248, 248);" >
    <h3>{{product.nameproduct}}</h3>
    <p>Precio: {{product.price}}</p>
    <button (click)="selectProduct()">Carrito</button>
  </div>`,
  styles: [`.card{
    align-items:center;
    border: 1px solid black;
    width: 10rem;
    padding: 1px;
    margin:1rem;
  }
  h3{
    font-family: sans-serif;
    font-size:16px;
    color: rgb(252,252,252);
  }
  p{
    font-family: sans-serif;
    font-size:15px;
    color: rgb(252,252,252);
  }
  button{
    background-color: rgb(216, 16, 139);
    color:rgb(245, 246, 247);
    border: none;
    padding: 10px 20px;
    margin:1.3rem;
}`]
}) 
export class ProductCardComponent {
  [x: string]: any;
  @Input() product: Product ={
    id:0,
    nameproduct:'',
    price:0
  };
  @Input() carrito: Carrito = {
    id:0,
    nameproduct:'',
    cantidad:0,
    price:0
  }
  
  @Output() productSelected: EventEmitter<Product>=new EventEmitter<Product>();
  
  selectProduct(){
    this.productSelected.emit(this.product);
    this.carrito.id=this.product.id;
    this.carrito.nameproduct= this.product.nameproduct;
    this.carrito.cantidad=1;
    this.carrito.price=this.product.price;
    let tablaRes:string ='tabla';
    var cell1 = HTMLTableRowElement;
    var cell2 = HTMLTableRowElement;
    var cell3 = HTMLTableRowElement;
    var cell4 = HTMLTableRowElement;
    var fila="<tr><td>"+this.carrito.id+"</td><td>"+this.carrito.nameproduct+"</td><td>"+this.carrito.cantidad+"</td><td>"+this.carrito.price+"</td></tr>";
    tablaRes = fila;
    console.log(fila);
    //this['carritoService'].saveCarrito(this.carrito)
  }

}
