import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ListProductsComponent } from './components/Products/list-products/list-products.component';
import { NewProductComponent } from './components/Products/new-product/new-product.component';

import { LoginComponent } from './components/Users/login/login.component';
import { NewUserComponent } from './components/Users/new-user/new-user.component';
import { ContactUsComponent } from './components/Contact/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/Products/shopping-cart/shopping-cart.component';
import { ClothesComponent } from './components/Products/clothes/clothes.component';
import { ShoesComponent } from './components/Products/shoes/shoes.component';
import { ComplementsComponent } from './components/Products/complements/complements.component';
import { ProductDetailComponent } from './components/Products/product-detail/product-detail.component';
import { Error404Component } from './components/Error/error404/error404.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ListProductsComponent,
    ProductDetailComponent,
    NewProductComponent,
    LoginComponent,
    NewUserComponent,
    ContactUsComponent,
    HomeComponent,
    ShoppingCartComponent,
    ClothesComponent,
    ShoesComponent,
    ComplementsComponent,
    ProductDetailComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
