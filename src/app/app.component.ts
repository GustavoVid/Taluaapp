import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {RouterModule,Route,Router} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductListComponent } from "./components/product-list/product-list.component";
import { CreateProductComponent } from "./components/create-product/create-product.component";
import { LoginComponent } from './components/login/login.component';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //title = 'Bienvenido a mi tienda..';
  constructor(private router: Router) {

  }
  goToCreateProduct(){
    console.log('Go to create product');
    this.router.navigate(['/product/add']);
  }
  goToLogin(){
    console.log('Go to login');
    this.router.navigate(['/login']);
  }
}
