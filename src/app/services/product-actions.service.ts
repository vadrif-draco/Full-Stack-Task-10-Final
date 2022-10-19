import { Injectable } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { Order } from '../interfaces/order';
import { ProductsService } from './products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductActionsService {
  //
  order: Order = new Order();
  wishlist: Product[] = [];
  constructor(private productsService: ProductsService) {
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
  addToCartById(productId: string) {
    this.productsService.getProductById(productId).subscribe({
      next: (response) => {
        this.order.inc(response.data);
        localStorage.setItem('order', JSON.stringify(this.order));
      },
      error: (e: HttpErrorResponse) =>
        console.log('Error adding product to cart by ID: ', e),
    });
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
  addToWishlistById(productId: string) {
    this.productsService.getProductById(productId).subscribe({
      next: (response) => {
        this.wishlist.push(response.data);
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
      },
      error: (e: HttpErrorResponse) =>
        console.log('Error adding product to wishlist by ID: ', e.error),
    });
  }
  addToWishlist(product: Product) {
    this.wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
  removeFromWishlist(productId: string) {
    this.wishlist.splice(
      this.wishlist.findIndex((item) => item._id == productId),
      1
    );
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
  }
  getNumOfWishlistItems(): number {
    return this.wishlist.length;
  }
  getWishlistedProducts(): Product[] {
    return this.wishlist;
  }
}
