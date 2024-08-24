import { Component } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  //arrProds : Product[]
  arrProductsBuy : Product[] = []
   
  constructor(
    private prodSrv: ProductService,
) {
    //this.arrProds = []
    
  }


  //  async ngOnInit() {
  //    try {
  //      await this.prodSrv.getProducts()
  //      console.log('aaa', this.prodSrv.productos);
       
  //      const productIds = JSON.parse(localStorage.getItem('productsBuy') || '[]');
  //     //  this.arrProductsBuy = this.prodSrv.getProducts()
         
  //        await productIds.filter((productId: string) => {
  //       return this.prodSrv.getProdutById(productId);
  //     });

  //      console.log("prodId", this.arrProductsBuy)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  
}
