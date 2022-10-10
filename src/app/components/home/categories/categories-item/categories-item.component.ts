import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../../../interfaces/category';

@Component({
  selector: 'app-categories-item',
  templateUrl: './categories-item.component.html',
  styleUrls: ['./categories-item.component.css'],
})
export class CategoriesItemComponent implements OnInit {
  //
  @Input() itemData: Category = {} as Category;

  constructor() {}

  ngOnInit(): void {}
}
