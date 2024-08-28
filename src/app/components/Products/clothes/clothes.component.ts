import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/Services/cart.service';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent {

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


  selectProduct(product: Product) {
    this.CartSrv.addToCart(product);
  }
}
