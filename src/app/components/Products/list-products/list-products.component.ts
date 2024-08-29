
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

  arrAllProducts: Product[];
  available: boolean;
  paginaActual: number;
  numPaginas: number;
  
  constructor(
    public ProductSrv: ProductService,
    public CartSrv: CartService,
    public ApiSrv: ApiService
  ) {
    this.arrAllProducts = []
    this.available = true; 
    this.paginaActual = 1;
    this.numPaginas = 0;
  }

  async ngOnInit() {
    try {
     const [response1, response2] = await Promise.all([
            this.ProductSrv.getByPage(this.paginaActual),
            this.ApiSrv.getAllMongo()
        ]);
    
      const allProducts = [...response1.results, ...response2];
     
      this.ProductSrv.productosFiltSearch = allProducts;  
      this.CartSrv.loadFromLocalStorage()
      
       this.numPaginas = response1.total_pages;
    } catch (error){
       console.error('Error loading products:', error);
    }
    

    
  }


  selectProduct(product: Product) {
    this.CartSrv.addToCart(product);
  }


  async cambiaPagina(siguiente: boolean) {
    if (siguiente) this.paginaActual++;
    else this.paginaActual--;

    const res = await this.ProductSrv.getByPage(this.paginaActual);
    this.arrAllProducts = [...res.results];
    console.log('ioi', this.arrAllProducts);
    
  }

}
