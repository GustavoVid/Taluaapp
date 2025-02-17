import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-create-customer',
  imports: [ReactiveFormsModule],
  templateUrl: './create-customer.component.html',
  styleUrl: './create-customer.component.css'
})
export class CreateCustomerComponent {
    customerForm = new FormGroup({
      namecustomer: new FormControl('',Validators.required),
      whatsapp: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
    });
    constructor (private customerService:CustomerService, private router: Router){
      console.log('CreateCustomerComponent');
    }
    
    onSubmit(form: FormGroup){
      console.log(form.value,this.customerForm.value);
      if (this.customerForm.valid) {
        let customer = form.value;
        customer.id=3;
        this.customerService.saveCustomer(customer)
        .subscribe(customer => {
          console.log('Customer created', customer);
          this.router.navigate(['/']);
        })
      }else{
        alert('Algun(os) datos no fueron introducidos');
      }
  
    }
}
