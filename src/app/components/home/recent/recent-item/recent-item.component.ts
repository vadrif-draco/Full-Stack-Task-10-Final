import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../interfaces/product';

@Component({
  selector: 'app-recent-item',
  templateUrl: './recent-item.component.html',
  styleUrls: ['./recent-item.component.css'],
})
export class RecentItemComponent implements OnInit {
  //
  @Input() itemData: Product = {} as Product;

  constructor() {}

  ngOnInit(): void {}
}
