
import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from 'src/app/Services/product.service';
import { CartService } from 'src/app/Services/cart.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  
  prodFiltrados: Product[] = []
   
  public productsInCart = JSON.parse(localStorage.getItem('productsBuy') || '{}');
  
  constructor(
    public prodSrv: ProductService,
    public carSrv: CartService,
    private router: Router
) {
  }



  async ngOnInit() {
    // this.carSrv.clickCounts2.subscribe(clicks => {
    //   console.log('clik', clicks);
      
    // })
  await this.prodSrv.getAll();

  // Filtrar productos que están en el carrito
  this.prodFiltrados = this.prodSrv.productos
    .filter((prod: Product) => this.productsInCart.hasOwnProperty(prod._id))
    .map((prod: Product) => {
      // Agregar la cantidad al producto filtrado
      return {
        ...prod,
        quantity: this.productsInCart[prod._id]
      };
    });

  
   }

  
  // addProduct(productId: string) {
  //       this.carSrv.addToCart(productId);
  //    this.carSrv.updateLocalStorage();
  //   const productsInCart = JSON.parse(localStorage.getItem('productsBuy') || '{}');
  //   console.log(productsInCart);
    
  //   this.prodSrv.productos
  //   .map((prod: Product) => {
  //     // Agregar la cantidad al producto filtrado
  //     return {
        
  //       quantity: productsInCart[prod._id]
  //     };
  //   });

    

  // // // Filtrar productos que están en el carrito
  // // this.prodFiltrados = this.prodSrv.productos
  // //   .filter((prod: Product) => productsInCart.hasOwnProperty(prod._id))
  // //   .map((prod: Product) => {
  // //     // Agregar la cantidad al producto filtrado
  // //     return {
  // //       ...prod,
  // //       quantity: productsInCart[prod._id]
  // //     };
  // //   });
  // }



  addProduct(productId: string) {
   console.log(this.productsInCart)
  this.prodFiltrados = this.prodSrv.productos
    .filter((prod: Product) => this.productsInCart.hasOwnProperty(prod._id))
    .map((prod: Product) => {
      return {
        ...prod,
        quantity: this.productsInCart[prod._id]++
        
      };
    });
    
    // localStorage.setItem('productsBuy', JSON.stringify({ key: productId, quantity: this.productsInCart[productId] }));
    // { [key: string]: number }
   
      console.log('localstorage', this.productsInCart)
    console.log('prodId', productId)
    this.prodFiltrados.find((elem:any)=>elem._id == productId)
   // this.carSrv.updateLocalStorage()
   // this.carSrv.addToCart(productId);
  }
    
  removeProduct(productId: string) {
    this.carSrv.removeToCart(productId);
     this.carSrv.updateLocalStorage();
    
  }


    removeAllProduct() {
   this.carSrv.removeAllProds()
    this.router.navigate(['/products'])
  }
}
