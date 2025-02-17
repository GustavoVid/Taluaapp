import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-login',
  imports: [RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    constructor(private router: Router) {
  
    }
   
    goToCustomer(){
      console.log('Go to create customer');
      this.router.navigate(['/create-customer']);
    }
    goToCreateProduct(){
      console.log('Go to create product');
      this.router.navigate(['/frmproducto']);
    }
    goToProductList(){
      console.log('Go to product list');
      this.router.navigate(['/product-list']);
    }

}
