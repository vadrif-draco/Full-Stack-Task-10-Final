import { Component, Input, OnInit } from '@angular/core';
import { Category } from '../../../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  //
  @Input() items: Category[] = [];
  constructor() {}

  ngOnInit(): void {}
}
