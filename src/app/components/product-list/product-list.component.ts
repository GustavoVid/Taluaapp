import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterModule,Router} from '@angular/router';
import { CarritoListComponent } from '../carrito-list/carrito-list.component';

@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent,CommonModule,RouterModule],
  templateUrl: './product-list.component.html',
  styles: [`.product-list{display:flex;width:80rem;gap:2%;flex-wrap:wrap;font-family: Roboto, "Helvetica Neue";}h1{margin-left:27rem;}`]
})
export class ProductListComponent {
  title = 'Supermercado del Licor'
  list: Product[] = [];

  
  constructor(private productService: ProductService,private router: Router){
    productService.getProducts()
    .subscribe(product => this.list = product);
  }

  goToDetail(product: Product){
    //console.log('Go to detail', product);
    this.router.navigate(['/product', product.id]);
  }

  crearTabla(){
    var table:HTMLTableElement
    table: HTMLTableElement;
    var thead: HTMLElement;
    var tbody: HTMLElement;
    var table: HTMLTableElement = <HTMLTableElement> document.getElementById("myTable");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = "NEW CELL1";
    cell2.innerHTML = "NEW CELL2";
    cell3.innerHTML = "NEW CELL3";
    cell4.innerHTML = "NEW CELL4";
  }
} 
