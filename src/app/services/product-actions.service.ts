import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Order } from '../interfaces/order';

@Injectable({
  providedIn: 'root',
})
export class ProductActionsService {
  //
  order: Order = new Order();
  wishlist: number[] = []; // Store IDs of wishlisted items
  constructor() {
    let storedOrder = localStorage.getItem('order');
    if (storedOrder) {
      let orderContent: Order = JSON.parse(storedOrder);
      this.order.items = orderContent.items;
    }

    let storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      this.wishlist = JSON.parse(storedWishlist);
    }
  }
  addToCart(p: Product) {
    this.order.inc(p);
    localStorage.setItem('order', JSON.stringify(this.order));
  }
  removeFromCart(p: Product) {
    this.order.dec(p);
    localStorage.setItem('order', JSON.stringify(this.order));
  }
  deleteFromCart(p: Product) {
    this.order.del(p);
    localStorage.setItem('order', JSON.stringify(this.order));
  }
  getNumOfCartItems(): number {
    return this.order.items.length;
  }
  getCartSubtotal(): number {
    return this.order.subtotal();
  }
  getCartShipping(): number {
    return this.order.shipping();
  }
  getCartTotal(): number {
    return this.order.total();
  }
  addToWishlist(productID: number) {
    this.wishlist.push(productID);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
  removeFromWishlist(productID: number) {
    this.wishlist.splice(this.wishlist.indexOf(productID), 1);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
  getNumOfWishlistItems(): number {
    return this.wishlist.length;
  }
}
