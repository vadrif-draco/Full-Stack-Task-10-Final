import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../../interfaces/category';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';

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
    this.categories = this.categoriesService.getCategories();
    this.featuredProducts = this.productsService.getFeaturedProducts();
    this.recentProducts = this.productsService.getRecentProducts();
  }
}
