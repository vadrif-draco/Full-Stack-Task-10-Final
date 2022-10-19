import { Injectable } from '@angular/core';
import { Category } from '../interfaces/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface CategoriesResponse {
  data: Category[];
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  //
  //   categories: Category[] = [
  //     { id: 1, name: 'Categ', count: 111, imageUrl: 'assets/img/cat-1.jpg' },
  //     { id: 2, name: 'Categ', count: 222, imageUrl: 'assets/img/cat-2.jpg' },
  //     { id: 3, name: 'Categ', count: 333, imageUrl: 'assets/img/cat-3.jpg' },
  //     { id: 4, name: 'Categ', count: 444, imageUrl: 'assets/img/cat-4.jpg' },
  //   ];
  constructor(private httpClient: HttpClient) {}
  getCategories(): Observable<CategoriesResponse> {
    return this.httpClient.get<CategoriesResponse>(
      `${environment.apiURL}/categories`
    );
  }
}
