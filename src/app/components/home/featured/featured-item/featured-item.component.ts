import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../interfaces/product';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css'],
})
export class FeaturedItemComponent implements OnInit {
  //
  @Input() itemData: Product = {} as Product;

  constructor() {}

  ngOnInit(): void {}
}
