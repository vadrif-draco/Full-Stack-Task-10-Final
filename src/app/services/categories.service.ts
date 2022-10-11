import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //
  categories: Category[] = [
    { id: 1, name: 'Categ', count: 111, imageUrl: 'assets/img/cat-1.jpg' },
    { id: 2, name: 'Categ', count: 222, imageUrl: 'assets/img/cat-2.jpg' },
    { id: 3, name: 'Categ', count: 333, imageUrl: 'assets/img/cat-3.jpg' },
    { id: 4, name: 'Categ', count: 444, imageUrl: 'assets/img/cat-4.jpg' },
  ];
  constructor(private httpClient: HttpClient) {}
  getCategories(): Category[] {
    return this.categories;
  }
}
