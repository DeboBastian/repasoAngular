
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
        console.log('adios', this.ProductSrv.productosFiltSearch);
     const [response1, response2] = await Promise.all([
       // this.ProductSrv.getByPage(this.paginaActual),
       this.ProductSrv.getProductsAntigua(),
            this.ApiSrv.getAllMongo()
        ]);
   
    console.log('hols', this.ProductSrv.productosFiltSearch);
    
       this.arrAllProducts = [...response1.results, ...response2];
     //console.log('u', response1);
    //   this.ProductSrv.productosFiltSearch$.subscribe(products => {
    //     console.log('Productos filtrados recibidos:', products);
    //     //this.ProductSrv.productosFiltSearch = products;
    //      this.arrAllProducts = products;
    // });
      this.ProductSrv.productosFiltSearch = this.arrAllProducts;  
      this.CartSrv.loadFromLocalStorage()
      //console.log('tetst',   this.ProductSrv.productosFiltSearch);
      
      //  this.numPaginas = response1.total_pages;
    } catch (error){
       console.error('Error loading products:', error);
    }
    

    
  }


   onSearchChange(searchText: string) {
    this.ProductSrv.getProductsSearch(searchText);
  }

  selectProduct(product: Product) {
    this.CartSrv.addToCart(product);
  }


  // async cambiaPagina(siguiente: boolean) {
  //   if (siguiente) this.paginaActual++;
  //   else this.paginaActual--;

  //   const res = await this.ProductSrv.getByPage(this.paginaActual);
  //   this.arrAllProducts = [...res.results];
  //   console.log('ioi', this.arrAllProducts);
    
  // }


    // onClick(product: Product) {
    //   this.CartSrv.addNewProduct(product)
    // }

}
