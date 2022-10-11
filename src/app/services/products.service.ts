import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { ProductActionsService } from './product-actions.service';

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
      color: 'black',
      size: 'm'
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
      color: 'blue',
      size: 'l'
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
      color: 'white',
      size: 'm'
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
      color: 'black',
      size: 'xl'
    },
    {
      id: 5,
      name: 'Product-5',
      count: 10,
      rating: 3.5,
      dprice: 99.99,
      oprice: 150.0,
      imageUrl: 'assets/img/product-5.jpg',
      recent: true,
      featured: true,
      color: 'white',
      size: 's'
    },
    {
      id: 6,
      name: 'Product-6',
      count: 3,
      rating: 4.5,
      dprice: 111.0,
      oprice: 113.0,
      imageUrl: 'assets/img/product-6.jpg',
      recent: false,
      featured: true,
      color: 'black',
      size: 'xs'
    },
    {
      id: 7,
      name: 'Product-7',
      count: 70,
      rating: 0.5,
      dprice: 31.0,
      oprice: 41.0,
      imageUrl: 'assets/img/product-7.jpg',
      recent: true,
      featured: false,
      color: 'black',
      size: 's'
    },
    {
      id: 8,
      name: 'Product-8',
      count: 60,
      rating: 4.5,
      dprice: 101.0,
      oprice: 121.0,
      imageUrl: 'assets/img/product-8.jpg',
      recent: true,
      featured: true,
      color: 'black',
      size: 'xs'
    },
    {
      id: 9,
      name: 'Product-9',
      count: 90,
      rating: 3.5,
      dprice: 91.0,
      oprice: 111.0,
      imageUrl: 'assets/img/product-9.jpg',
      recent: false,
      featured: true,
      color: 'blue',
      size: 'xl'
    },
  ];
  constructor(
    private httpClient: HttpClient,
    private productActionsService: ProductActionsService
  ) {}
  getAllProducts(): Product[] {
    return this.products;
  }
  getRecentProducts(): Product[] {
    return this.products.filter((product) => product.recent);
  }
  getFeaturedProducts(): Product[] {
    return this.products.filter((product) => product.featured);
  }

  getWishlistedProducts(): Product[] {
    const productWishlist = this.productActionsService.wishlist;
    return this.products.filter((product) =>
      productWishlist.includes(product.id)
    );
  }
}
