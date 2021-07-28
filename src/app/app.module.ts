import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { CreateProductsComponent } from './product/create-products/create-products.component';
import { ListProductsComponent } from './product/list-products/list-products.component';
import { UpdateProductsComponent } from './product/update-products/update-products.component';
import { ViewProductsComponent } from './product/view-products/view-products.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  declarations: [
    AppComponent,
    ListProductsComponent,
    CreateProductsComponent,
    UpdateProductsComponent,
    ViewProductsComponent,
    LoginComponent,
    RegisterComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    ConfirmationPopoverModule.forRoot({
      focusButton: 'confirm',}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
