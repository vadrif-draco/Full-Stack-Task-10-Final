import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-shop-product-area',
  templateUrl: './shop-product-area.component.html',
  styleUrls: ['./shop-product-area.component.css'],
})
export class ShopProductAreaComponent implements OnInit {
  //
  @Input() shopProductAreaItems: Product[] = [];
  shopProductAreaItemsPaginated: Product[] = [];
  pageCurrent: number = 0; // 0-based
  numOfPages: number = 1;
  pageSize: number = 6;

  constructor() {}

  ngOnInit(): void {
    this.shopProductAreaItemsPaginated = this.paginate(
      this.shopProductAreaItems
    );
  }

  paginate(productsPrePagination: Product[]): Product[] {
    this.updateNumOfPages();
    this.checkPageCurrent();
    return productsPrePagination.slice(
      this.pageCurrent * this.pageSize,
      this.pageCurrent * this.pageSize + this.pageSize
    );
  }

  private updateNumOfPages(): void {
    this.numOfPages = Math.ceil(
      this.shopProductAreaItems.length / this.pageSize
    );
  }

  private checkPageCurrent(): void {
    this.pageCurrent = Math.min(this.pageCurrent, this.numOfPages - 1);
  }

  updatePageCurrent(newPageCurrent: number) {
    this.pageCurrent = newPageCurrent;
  }

  updatePageSize(newPageSize: number) {
    this.pageSize = newPageSize;
    this.updateNumOfPages();
    this.checkPageCurrent();
  }
}
