import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Iproducts> = [];
  constructor() { }

  addToCart(obj: Iproducts) {
    this.cart.push(obj);
  }
  getCart() {
    return this.cart;
  }
  clearCart() {
    return this.cart;
  }

  calcTotal() {
    let total: number = 0;

    this.cart.forEach((val) => {
      total += val.price;
    })
    return total;
  }
}