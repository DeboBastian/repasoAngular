import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from './components/Products/list-products/list-products.component';
import { NewProductComponent } from './components/Products/new-product/new-product.component';
import { LoginComponent } from './components/Users/login/login.component';
import { NewUserComponent } from './components/Users/new-user/new-user.component';
import { ContactUsComponent } from './components/Contact/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { ShoppingCartComponent } from './components/Products/shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './components/Products/product-detail/product-detail.component';
import { ClothesComponent } from './components/Products/clothes/clothes.component';
import { ShoesComponent } from './components/Products/shoes/shoes.component';
import { ComplementsComponent } from './components/Products/complements/complements.component';
import { Error404Component } from './components/Error/error404/error404.component';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: '/home' },
  { path: "home", component: HomeComponent },
  { path: "products", component: ListProductsComponent },
  { path: "product/:productId", component: ProductDetailComponent },
  // { path: "products/clothes", component: ClothesComponent },
  // { path: "products/shoes", component: ShoesComponent },
  // { path: "products/complements", component: ComplementsComponent },
  { path: "products/new", component: NewProductComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: NewUserComponent },
  { path: "contact-us", component: ContactUsComponent },
  { path: "**", component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
