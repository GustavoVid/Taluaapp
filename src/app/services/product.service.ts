import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {id: 1, nameproduct: 'Ron Habana 7', price: 350},
    {id: 2, nameproduct: 'Ron Abuelo ', price: 320},
    {id: 3, nameproduct: 'Ron Barcelo', price: 350},
    {id: 4, nameproduct: 'Ron Flor de Caña', price: 350},
    {id: 5, nameproduct: 'Fernet Branca', price: 330},
    {id: 6, nameproduct: 'Whisky Johnnie Walker E.N.', price: 550},
    {id: 7, nameproduct: 'Whisky Johnnie Walter E.R.', price: 450},
    {id: 8, nameproduct: 'Whisky Old Parr', price: 550},
    {id: 9, nameproduct: 'Whisky Chivas Regal', price: 530},
    {id: 10, nameproduct: 'Whisky Jack Daniels', price: 550}
  ];
  

  saveProduct(product: Product): Observable<Product>{
    //TODO guardar en BD
    this.products.push(product);
    return of (product); //todo que devuelva el valor guardado
  }
  getProducts() : Observable<Product[]>{
    return of(this.products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    return of(this.products.find(product => product.id === id)) ;
  }

  updateProduct(product: Product): Observable<Product>{
    //TODO guardar en BD
    return of (this.products[0]); //todo que devuelva el valor guardado
  }

  deleteProduct(id: number): Observable<boolean>{
    //TODO guardar en BD
    return of (true); //todo que devuelva el valor guardado
  }
}
