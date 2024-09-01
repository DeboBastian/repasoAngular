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
  public productosFiltSearch: Product[] = []
  public page: number
  public currentPage: number
  public totalElements: number
  private productosFiltSearchSubject = new BehaviorSubject<Product[]>([]);
  productosFiltSearch$ = this.productosFiltSearchSubject.asObservable();

  constructor(
    private httpClient: HttpClient
  ) {
    this.baseUrl = "https://peticiones.online/api/products";
    this.page = 1
    this.currentPage = 1
    this.totalElements = 3
  }

  setProductos(products: Product[]) {
    this.productos = products;
    this.productosFiltSearchSubject.next(products); // Inicializa con todos los productos.
  }

  getProductsSearch(searchText: string) {
    const filtro = this.productos.filter(el =>
      el.name.toLowerCase().includes(searchText.toLowerCase())
    )
      this.productosFiltSearchSubject.next(filtro);
    // this.productosFiltSearch = filtro;
    // console.log('lol', this.productosFiltSearch) ;
    
  }
  
    getProducts() {
    return this.productos;  // Devuelve los productos, si es necesario.
    }
  
  
  getByPage(page: number = 1) {
    return firstValueFrom(
      this.httpClient.get<ApiResponse>(`${this.baseUrl}?page=${page}`)
    )
  }

 
  getProdutById(productId: string) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/${productId}`)
    )
  }

   getProductsAntigua() {
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
  
  
  prevPage() {
    this.currentPage -= 1
    this.page -= this.totalElements
  }
  
   nextPage() {
    this.currentPage += 1
    this.page += this.totalElements
  }
}
