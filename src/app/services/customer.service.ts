import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Customer } from '../model/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private customers: Customer[] = [
    {idcust: 1, namecustomer: 'Gustavo Vidaurre Vera', address: 'C.Isaac Maldonado Nro. 1371', whatsapp:'76225299',email:'gustavo.vidaurre@gmail.com'},
    {idcust: 2, namecustomer: 'Jaime Nava Barrero', address: 'Ballivian Edif. Green Tower 12A', whatsapp:'78525441',email:'jain@gmail.com'},
    {idcust: 3, namecustomer: 'Luana Vidaurre Camacho', address: 'C.Isaac Maldonado Nro. 1371', whatsapp:'785454114',email:'Luana.vidaurre@gmail.com'},
  ];
  

  saveCustomer(customer: Customer): Observable<Customer>{
    //TODO guardar en BD
    this.customers.push(customer);
    return of (customer); //todo que devuelva el valor guardado
  }
  
}
