import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateProductsComponent } from './product/create-products/create-products.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UpdateProductsComponent } from './product/update-products/update-products.component';
import { ViewProductsComponent } from './product/view-products/view-products.component';

const routes: Routes = [
  {path:'products' , component: ListProductsComponent},
  {path:'create-products' , component: CreateProductsComponent},
  {path: 'updated-products/:product_id' , component: UpdateProductsComponent},
  {path: 'view-products/:product_id' , component: ViewProductsComponent},
  {path: 'login' , component: LoginComponent},
  {path:'register' , component:RegisterComponent},
  {path:'' , redirectTo:'login' , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
