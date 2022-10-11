import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-shop-product-area-pagesize',
  templateUrl: './shop-product-area-pagesize.component.html',
  styleUrls: ['./shop-product-area-pagesize.component.css'],
})
export class ShopProductAreaPagesizeComponent implements OnInit {
  //
  @Output() pageSizeChange: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
