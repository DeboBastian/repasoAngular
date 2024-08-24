
import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../../Services/product.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

   //public clickCounts: { [key: string]: number } = {};
  
  arrProducts: Product[];
  available: boolean;
  constructor(
    public ProductSrv: ProductService,
    public CartSrv: CartService
  ) {
    this.arrProducts = []
      this.available = true; 
  }

  async ngOnInit(){
    const response = await this.ProductSrv.getProducts();
    this.arrProducts = response.results
    
    this.CartSrv.loadFromLocalStorage()
  }


  selectProduct(productId: string) {
    this.CartSrv.addToCart(productId);
  }

}
