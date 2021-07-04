import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsViewComponent } from './products-view/products-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductViewComponent } from './product-view/product-view.component'
import { CartViewComponent} from '../app/cart-view/cart-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'products', component: ProductsViewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'productview/:id', component: ProductViewComponent },
  { path: 'shoppingcart', component: CartViewComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }