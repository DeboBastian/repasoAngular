import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {

  constructor(private cartSrv: CartService) {
    
  }


  ngOnInit() {
  // this.cartSrv.products
  }
}
