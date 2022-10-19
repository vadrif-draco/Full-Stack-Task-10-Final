import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../../interfaces/category';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //
  categories: Category[] = [];
  featuredProducts: Product[] = [];
  recentProducts: Product[] = [];
  constructor(
    private categoriesService: CategoriesService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe({
      next: (response) => (this.categories = response.data),
      error: (e: HttpErrorResponse) =>
        console.log('Error fetching categories: ', e.error),
    });

    this.productsService.getFeaturedProducts().subscribe({
      next: (response) => (this.featuredProducts = response.data),
      error: (e: HttpErrorResponse) =>
        console.log('Error fetching featured products: ', e.error),
    });

    this.productsService.getRecentProducts().subscribe({
      next: (response) => (this.recentProducts = response.data),
      error: (e: HttpErrorResponse) =>
        console.log('Error fetching recent products: ', e.error),
    });
  }
}
