import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {

  product: any

  constructor(
    private prodSrv: ProductService,
    private activatedRoute: ActivatedRoute
  ) {
    this.product = {}
  }



  
  ngOnInit() {
    try {
      this.activatedRoute.params.subscribe(async data => {
        this.product = await this.prodSrv.getProdutById(data['productId']);
        console.log(data['productId']);
      })

    } catch (error) {
      console.log(error)
    }
  }

}
