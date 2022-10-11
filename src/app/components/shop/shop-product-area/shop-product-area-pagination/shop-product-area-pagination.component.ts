import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-product-area-pagination',
  templateUrl: './shop-product-area-pagination.component.html',
  styleUrls: ['./shop-product-area-pagination.component.css'],
})
export class ShopProductAreaPaginationComponent implements OnInit {
  //
  @Input() numOfPages: number = 1;
  @Input() pageCurrent: number = 0;
  @Output() pageChange = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  updatePageCurrentNumber(n: number) {
    if (n < this.numOfPages && n >= 0)
      this.pageChange.emit((this.pageCurrent = n));
  }
}
