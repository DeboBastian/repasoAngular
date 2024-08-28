
import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../../Services/product.service';
import { CartService } from 'src/app/Services/cart.service';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

   //public clickCounts: { [key: string]: number } = {};
  
  arrAllProducts: Product[];
  available: boolean;

  constructor(
    public ProductSrv: ProductService,
    public CartSrv: CartService,
    public ApiSrv: ApiService
  ) {
    this.arrAllProducts = []
    this.available = true; 
  }

  async ngOnInit() {
    try {
     const [response1, response2] = await Promise.all([
            this.ProductSrv.getProducts(),
            this.ApiSrv.getAllMongo()
        ]);
    
      const allProducts = [...response1.results, ...response2];
      console.log('res1', response1.results)
      console.log('res2', response2)

      this.arrAllProducts = allProducts;
      
    this.CartSrv.loadFromLocalStorage()
    } catch (error){
       console.error('Error loading products:', error);
    }
    
  }


  selectProduct(product: Product) {
    this.CartSrv.addToCart(product);
  }

}
