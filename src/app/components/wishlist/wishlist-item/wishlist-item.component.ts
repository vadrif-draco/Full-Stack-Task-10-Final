import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css'],
})
export class WishlistItemComponent implements OnInit {
  //
  @Input() itemData: Product = {} as Product;

  constructor() {}

  ngOnInit(): void {}
}
