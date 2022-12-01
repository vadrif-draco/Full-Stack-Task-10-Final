import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProductActionsService } from './product-actions.service';

export interface ProductsResponse {
  data: Product[];
  status: string;
}

export interface ProductResponse {
  data: Product;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  //
  constructor(private httpClient: HttpClient) {}

  getAllProducts(): Observable<ProductsResponse> {
    let all_products = this.httpClient.get<ProductsResponse>(
      `${environment.apiURL}/products`
    );
    return all_products
  }

  getRecentProducts(): Observable<ProductsResponse> {
    let recent_products = this.httpClient.get<ProductsResponse>(
      `${environment.apiURL}/products/getRecent`
    );
    return recent_products
  }

  getFeaturedProducts(): Observable<ProductsResponse> {
    let featured_products = this.httpClient.get<ProductsResponse>(
      `${environment.apiURL}/products/getFeatured`
    );
    return featured_products
  }

  getProductsByCategoryId(categoryId: string): Observable<ProductsResponse> {
    return this.httpClient.get<ProductsResponse>(
      `${environment.apiURL}/products/getByCategoryId/${categoryId}`
    );
  }

  getProductById(id: string): Observable<ProductResponse> {
    return this.httpClient.get<ProductResponse>(
      `${environment.apiURL}/products/${id}`
    );
  }
}
