import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-price',
  templateUrl: './item-price.component.html',
  styleUrls: ['./item-price.component.css'],
})
export class ItemPriceComponent implements OnInit {
  //
  @Input() discountedPrice: number = 0;
  @Input() originalPrice: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
