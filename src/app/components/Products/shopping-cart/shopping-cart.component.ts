
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
       this.prodFiltrados = this.carSrv.productsInCart

   }

  
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

  }

    removeAllProduct() {
   this.carSrv.removeAllProds()
    this.router.navigate(['/products'])
  }
}
