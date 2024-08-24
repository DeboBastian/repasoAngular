// import { Component } from '@angular/core';
// import { Product } from 'src/app/interfaces/product';
// import { ProductService } from '../../../Services/product.service';

// @Component({
//   selector: 'app-list-products',
//   templateUrl: './list-products.component.html',
//   styleUrls: ['./list-products.component.css']
// })
// export class ListProductsComponent {

//   clickCounts: { [key: string]: number } = {};

//   arrProducts: Product[];
//  available = true;
//   constructor(
//     private ProductSrv: ProductService

//   ) {
//     this.arrProducts = []
//   }


  
//   ngOnInit() {
//     try {
     
//       const productIds = JSON.parse(localStorage.getItem('productsBuy') || '[]');

//       this.arrProducts = productIds.map((productId: string) => {
//         return this.ProductSrv.getProdutById(productId);
//       });

//       console.log("prodId", this.arrProducts);
//     } catch (error) {
//       console.log(error);
//     }
//   }
 
//     // const response = await this.ProductSrv.getProducts();
//     // this.arrProducts = response.results
    
  

//   selectProduct(productId: string) {
//     if (!this.clickCounts[productId]) {
//       this.clickCounts[productId] = 0;
//     }
//     this.clickCounts[productId]++;
    

//   const productsInCart = JSON.parse(localStorage.getItem('productsBuy') || '[]');
  
//   productsInCart.push(productId);
  
//   localStorage.setItem('productsBuy', JSON.stringify(productsInCart));
// }

//     async onClick(productId: string) {
//     const response = await this.ProductSrv.getProdutById(productId);
//     console.log(response);
//   }
  

// }


import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
clickCounts: { [key: string]: number } = {};
  arrProducts: Product[];
  available: boolean;
  constructor(
    private ProductSrv: ProductService

  ) {
    this.arrProducts = []
      this.available = true; 
  }

  async ngOnInit(){
    const response = await this.ProductSrv.getProducts();
    this.arrProducts = response.results
    
  }

  selectProduct(productId: string) {
     if (!this.clickCounts[productId]) {
      this.clickCounts[productId] = 0;
    }
    this.clickCounts[productId]++;
    
     const productsInCart = JSON.parse(localStorage.getItem('productsBuy') || '[]');
    productsInCart.push(productId);
    console.log(productId)
    localStorage.setItem('productsBuy', JSON.stringify(productsInCart));
  }

  

}
