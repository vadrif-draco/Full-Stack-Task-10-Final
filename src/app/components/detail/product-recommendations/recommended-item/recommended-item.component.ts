import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../interfaces/product';

@Component({
  selector: '[app-recommended-item]',
  templateUrl: './recommended-item.component.html',
  styleUrls: ['./recommended-item.component.css']
})
export class RecommendedItemComponent implements OnInit {
  //
  @Input() itemData: Product = {} as Product;

  constructor() { }

  ngOnInit(): void {
  }

}
