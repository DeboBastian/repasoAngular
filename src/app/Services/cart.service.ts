import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   clickCounts: { [key: string]: number } = {};
  prodFiltrados: Product[] = []
  _clickCounts: BehaviorSubject<{}> = new BehaviorSubject({})

  constructor() { }

  get clickCounts2() {
    return this._clickCounts.asObservable()
  }

  addToCart(productId: string): void {
    console.log(this.clickCounts);
    
  
    if (!this.clickCounts[productId]) {
      this.clickCounts[productId] = 0;
    }
    this.clickCounts[productId]++;
    this.updateLocalStorage();
    this._clickCounts.next(this.clickCounts)
  }


  
  removeToCart(productId: string): void {
    if (!this.clickCounts[productId]) {
      this.clickCounts[productId] = 0;
    }
    this.clickCounts[productId]--;
    this.updateLocalStorage();
  }


  removeAllProds(): void {
    localStorage.removeItem('productsBuy');
    this.prodFiltrados = [];
    this.updateLocalStorage();
   }
  
  
  
  getClickCount(productId: string): number {
    return this.clickCounts[productId] || 0;
  }


  
  updateLocalStorage(): void {
     JSON.parse(localStorage.getItem('productsBuy') || '[]');
    localStorage.setItem('productsBuy', JSON.stringify(this.clickCounts));
  }

  loadFromLocalStorage(): void {
    const storedCounts = JSON.parse(localStorage.getItem('productsBuy') || '{}');
    this.clickCounts = storedCounts;
  }

}
