import { Component } from '@angular/core';
import { FormControl,ReactiveFormsModule,Validators,FormGroup} from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frmproducto',
  imports: [ReactiveFormsModule],
  templateUrl: './frmproducto.component.html',
  styleUrl: './frmproducto.component.css',
})
export class FrmproductoComponent {  
  productForm = new FormGroup({
      nameproduct: new FormControl('',Validators.required),
      price: new FormControl('',[Validators.required, Validators.min(1)])
    });
    constructor (private productService:ProductService, private router: Router){
      console.log('CreateProductComponent');
    }
    
    onSubmit(form: FormGroup){
      console.log(form.value,this.productForm.value);
      if (this.productForm.valid) {
        let product = form.value;
        product.id=11;
        this.productService.saveProduct(product)
        .subscribe(product => {
          console.log('Product created', product);
          this.router.navigate(['/']);
        })
      }else{
        alert('Formulario invalido');
      }
  
    }
}

