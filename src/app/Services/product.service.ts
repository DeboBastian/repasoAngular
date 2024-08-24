import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string;
  public productos: Product[] = []
  public filteredProducts
  
  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl = "https://peticiones.online/api/products";
    this.filteredProducts = "";
  }

  getByPage(page: number = 1) {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(`${this.baseUrl}?page=${page}`)
    )
  }

  
  getProdutById(productId: string){
  return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${productId}`)
    )
}

  getProducts(){
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(this.baseUrl)
    )
  }

async getAll() {
       try {
        const response = await fetch(`${this.baseUrl}`, {
         method: 'GET'
      })
       const data = await response.json()
       this.productos = data.results
       console.log(this.productos)
       } catch (error) {
        console.log(error)
       }
      
}
  

  //  onSearch(searchProd: string): void {
  //   if (searchProd) {
  //     this.filteredProducts = this.arrProducts.filter(product => 
  //       product.name.toLowerCase().includes(searchProd.toLowerCase())
  //     );console.log('miai', this.filteredProducts);

  //   } else {
  //     this.filteredProducts = this.arrProducts; 
  //   }
  //}


}
