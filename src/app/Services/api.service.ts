import { firstValueFrom } from 'rxjs';
import { Product } from '../interfaces/product';
import { APIUrl } from './../../../../environment/environment_dev';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  
  productsMongo : Product[] = []
  constructor(private httpClient: HttpClient) { 
    
  }

  //  async getAllMongo() {
  //      try {
  //       const response = await fetch(`${APIUrl}/api/products`, {
  //        method: 'GET'
      
  //     })
  //      const data = await response.json()
  //      this.productsMongo = data
  //      console.log(this.productsMongo)
  //      } catch (error) {
  //       console.log(error)
  //      }
  //  }
  
  getAllMongo() {
        return firstValueFrom(
      this.httpClient.get<any>(`${APIUrl}/api/products`)
    )
      //   const response = await fetch(`${APIUrl}/api/products`, {
      //    method: 'GET'
      
      // })
      //  const data = await response.json()
      //  this.productsMongo = data
      //  console.log(this.productsMongo)
       
   
  }
}
