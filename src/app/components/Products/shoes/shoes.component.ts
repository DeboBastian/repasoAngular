import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ApiService } from 'src/app/Services/api.service';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.css']
})
export class ShoesComponent {
  shoes: Product[] = []
 constructor(
   public ApiSrv: ApiService,
   public CartSrv: CartService
    ) {
  }

  async ngOnInit(){
   const shoes = await this.ApiSrv.findShoes();
    this.shoes = shoes;
    
    this.CartSrv.loadFromLocalStorage()
    
  }


 
  selectProduct(product: Product) {
    this.CartSrv.addToCart(product);
  }


}
