import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //
  constructor(private httpClient: HttpClient) {}
  getCategories(): Category[] {
    return [
      { id: 1, name: 'Categ', count: 1, imageUrl: 'assets/img/cat-2.jpg' },
      { id: 2, name: 'Categ', count: 1, imageUrl: 'assets/img/cat-3.jpg' },
    ];
  }
}
