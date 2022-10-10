import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //
  products: Product[] = [
    {
      id: 1,
      name: 'Product-1',
      count: 12,
      rating: 3,
      dprice: 101.0,
      oprice: 121.0,
      imageUrl: 'assets/img/product-1.jpg',
      recent: false,
      featured: false,
    },
    {
      id: 2,
      name: 'Product-2',
      count: 31,
      rating: 4.5,
      dprice: 101.0,
      oprice: 121.0,
      imageUrl: 'assets/img/product-2.jpg',
      recent: true,
      featured: false,
    },
    {
      id: 3,
      name: 'Product-3',
      count: 15,
      rating: 5,
      dprice: 101.0,
      oprice: 121.0,
      imageUrl: 'assets/img/product-3.jpg',
      recent: false,
      featured: true,
    },
    {
      id: 4,
      name: 'Product-4',
      count: 0,
      rating: 5,
      dprice: 101.0,
      oprice: 121.0,
      imageUrl: 'assets/img/product-4.jpg',
      recent: true,
      featured: true,
    },
  ];
  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Product[] {
    return this.products;
  }
  getRecentProducts(): Product[] {
    return this.products.filter((product) => product.recent);
  }
  getFeaturedProducts(): Product[] {
    return this.products.filter((product) => product.featured);
  }
}
