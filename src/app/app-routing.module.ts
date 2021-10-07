import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasketComponent } from './components/basket/basket.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'products', component:ProductComponent},
  {path:'',redirectTo:'products', pathMatch:'full'},
  {path:'products/category/:categoryId', component:ProductComponent},
  {path:'baskets', component:BasketComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
