import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shop-product-area-item',
  templateUrl: './shop-product-area-item.component.html',
  styleUrls: ['./shop-product-area-item.component.css'],
})
export class ShopProductAreaItemComponent implements OnInit {
  //
  @Input() itemData: Product = {} as Product;

  constructor() {}

  ngOnInit(): void {}
}
