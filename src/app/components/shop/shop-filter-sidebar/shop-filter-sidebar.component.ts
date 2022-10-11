import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shop-filter-sidebar',
  templateUrl: './shop-filter-sidebar.component.html',
  styleUrls: ['./shop-filter-sidebar.component.css'],
})
export class ShopFilterSidebarComponent implements OnInit {
  //
  @Output() changePriceFilters: EventEmitter<{
    //
    event: any;
    priceRange: { min: number; max: number };
  }> = new EventEmitter();

  @Output() changeColorFilters: EventEmitter<{
    //
    event: any;
    color: string;
  }> = new EventEmitter();

  @Output() changeSizeFilters: EventEmitter<{
    //
    event: any;
    size: string;
  }> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
