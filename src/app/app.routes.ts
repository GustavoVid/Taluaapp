import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { LoginComponent } from './components/login/login.component';
import { FrmproductoComponent } from './frmproducto/frmproducto.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';

export const routes: Routes = [
    { path: 'login', component:LoginComponent},
    { path: 'product', redirectTo: ''},
    { path: 'product/:id', component: ProductDetailComponent },
    { path: 'product/add', component: CreateProductComponent },
    { path: 'frmproducto', component: FrmproductoComponent},
    { path: 'product-list', component: ProductListComponent},
    { path: 'create-customer', component: CreateCustomerComponent}

];
