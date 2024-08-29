import { ApiService } from './../../../Services/api.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})
export class ComplementsComponent {
  compl: Product[] = []
 constructor(
   public ApiSrv: ApiService,
   public CartSrv: CartService
    ) {
  }

  async ngOnInit(){
   const complements = await this.ApiSrv.findComplements();
    this.compl = complements
    
    this.CartSrv.loadFromLocalStorage()
    
  }


 
  selectProduct(product: Product) {
    this.CartSrv.addToCart(product);
  }


}
