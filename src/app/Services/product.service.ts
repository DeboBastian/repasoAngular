import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response';
import { Product } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string; 
  public productos: Product[] = []
  productosFiltSearch: Product[] = []
  
  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl = "https://peticiones.online/api/products";
   
  }

  getProductsSearch(searchText: string) {
    const filtro = this.productos.filter(el =>
      el.name.toLowerCase().includes(searchText.toLowerCase())
    )
    this.productosFiltSearch = filtro;
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
  

}
