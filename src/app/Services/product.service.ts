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
  
  constructor(
    private httpClient: HttpClient
  ) { 
    this.baseUrl = "https://peticiones.online/api/products";
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



}
