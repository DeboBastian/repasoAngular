
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
  //total: number
  public productsInCart = JSON.parse(localStorage.getItem('productsBuy') || '{}');
  
  constructor(
    public prodSrv: ProductService,
    public carSrv: CartService,
    private router: Router
  ) {
   // this.total = 0;
  }


  async ngOnInit() {
     this.prodFiltrados = this.carSrv.productsInCart
    

    // this.total = this.prodFiltrados.reduce((sum, product) => {
    //   const quantity = this.productsInCart[product._id] || 0;
    //   console.log(quantity);
      
    //   return sum + (product.price * quantity);
    // }, 0);
    
  
//     this.carSrv.products.subscribe(products => {
//   console.log('yaaaaaaaaaa', products)
// })
   }



  // getPrice(){
  // let totalPrice = JSON.parse(localStorage.getItem('clicks') || '[]');
  //   console.log('dsa', totalPrice);
    
  //   this.total = this.prodFiltrados.reduce((sum, product) => {
  //     const itemInCart = this.productsInCart.find((item: Product) => item._id === product._id);
  //     const quantity = itemInCart ? itemInCart.quantity : 0;
  //     return sum + (product.price * quantity);
  //   }, 0);

  //   console.log('Total Price222:', totalPrice);
   
  // }
  
   modifyQuantity(productId: string, operation: string) {
    const product = this.prodFiltrados.find((el: any) => el._id == productId)

      if (operation == 'add') {
      product!.quantity = (product!.quantity || 0) + 1;
    } else {
      product!.quantity = (product!.quantity ||  0) - 1;
    }
    this.carSrv.clickCounts[productId] = product!.quantity
    this.carSrv.updateLocalStorage()
    localStorage.setItem('productsBuy', JSON.stringify(this.prodFiltrados))
  // this.carSrv.totalReduce(this.total)
  }

    removeAllProduct() {
   this.carSrv.removeAllProds()
      this.router.navigate(['/products'])
  }
}
