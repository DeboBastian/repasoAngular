import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  arrProducts: any[] = []; // Lista original de productos
  filteredProducts: any[] = []; // Lista de productos filtrados
  

  constructor(private productSrv: ProductService) {
    // this.arrProducts = ProductSrv.productos
   }

  
 async ngOnInit() {
  await this.productSrv.getAll();
    console.log(this.productSrv.productos)
    
      this.arrProducts = this.productSrv.productos;
      this.filteredProducts = this.productSrv.productos;
    
  }
  
  onSearch(searchProd: string): void {
    if (searchProd) {
      this.filteredProducts = this.arrProducts.filter(product => 
        product.name.toLowerCase().includes(searchProd.toLowerCase())
      );console.log('miai', this.filteredProducts);

    } else {
      this.filteredProducts = this.arrProducts; 
    }
  }



}
