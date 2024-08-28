import { ApiService } from './../../../Services/api.service';
import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-complements',
  templateUrl: './complements.component.html',
  styleUrls: ['./complements.component.css']
})
export class ComplementsComponent {
  

    constructor(
    public ApiSrv: ApiService
    ) {
  }

  async ngOnInit(){
    await this.ApiSrv.getAllMongo();
    // this.arrProducts = response.results
    
    // this.CartSrv.loadFromLocalStorage()
  }


  // selectProduct(product: Product) {
  //   this.CartSrv.addToCart(product);
  // }



}
