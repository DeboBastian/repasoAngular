import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   clickCounts: { [key: string]: number } = {};
  prodFiltrados: Product[] = []
  cartProducts: Product[] = []
  //private _products: BehaviorSubject<Product[]> 
 // _total: BehaviorSubject<number> = new BehaviorSubject(0)
 // _clickCounts: BehaviorSubject<{}> = new BehaviorSubject({})

  public productsInCart = JSON.parse(localStorage.getItem('productsBuy') || '{}')
  constructor() {
    //this._products = new BehaviorSubject<Product[]>([]);
   }

  // get products() {
  //   return this._products.asObservable()
  // }


  // addNewProduct(product: Product) {
  //   this.cartProducts.push(product)
  //   this._products.next(this.cartProducts)
  // }


  // get clickCounts2() {
  //   return this._clickCounts.asObservable()
  // }


//   get total() {
//     return this._total.asObservable()
// }

  // totalReduce(total: number) {
  //    let totalPrice = JSON.parse(localStorage.getItem('clicks') || '[]');
  //    console.log('dsa', totalPrice);
  
  //    total = this.prodFiltrados.reduce((sum, product) => {
  //      const itemInCart = this.productsInCart.find((item: Product) => item._id === product._id);
  //      const quantity = itemInCart ? itemInCart.quantity : 0;
  //      return sum + (product.price * quantity);
  //    }, 0);
  //   this._total.next(total)
  //    console.log('Total Price222:', totalPrice);
  // }


  addToCart(product: Product) {
    this.productsInCart = JSON.parse(localStorage.getItem('productsBuy') || '{}');

    if (this.productsInCart.length == undefined) {
      this.productsInCart = []
      product.quantity = 1
      this.productsInCart.push(product)
      this.clickCounts[product._id] = 1;
      this.updateLocalStorage()
      return localStorage.setItem('productsBuy', JSON.stringify(this.productsInCart))

    }
    else if (!this.productsInCart.some((el: any) => el._id == product._id)) {
      product.quantity = 1
      this.productsInCart.push(product)
      this.clickCounts[product._id] = 1;
      this.updateLocalStorage()
      return localStorage.setItem('productsBuy', JSON.stringify(this.productsInCart))
    }

    if (product.quantity == undefined) {
      product.quantity = this.clickCounts[product._id]
    }
    product.quantity = product!.quantity! + 1
    this.productsInCart[this.productsInCart.findIndex((el: any) => el._id == product._id)] = product
    this.clickCounts[product._id]++;
    this.updateLocalStorage()
    return localStorage.setItem('productsBuy', JSON.stringify(this.productsInCart))
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
    JSON.parse(localStorage.getItem('clicks') ||  '[]');
    localStorage.setItem('clicks', JSON.stringify(this.clickCounts));
  }

  loadFromLocalStorage(): void {
    const storedCounts = JSON.parse(localStorage.getItem('clicks') || '{}');
    
    this.clickCounts = storedCounts;
  }

  

}
