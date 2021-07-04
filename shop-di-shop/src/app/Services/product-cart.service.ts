import { Injectable } from '@angular/core';
import {OrderedProduct} from "src/app/Moduls/ordereed-product";

@Injectable({
  providedIn: 'root'
})
export class ProductCartService {

  itemsInCart: OrderedProduct[] = [];
  total: number;

  constructor() { }

  addToCart(product, color, price) {

    let x = new OrderedProduct();
    x.product = product;
    x.selectedColor = color;
    x.price = price

    this.itemsInCart.push(x);
  }

  getTotal(){
    for(let p of this.itemsInCart) {
      this.total += p.price;}
      return this.total;
  }

  getItems() {
    return this.itemsInCart;
  }

  clearCart() {
    this.itemsInCart = [];
    return this.itemsInCart; 
  }
}
