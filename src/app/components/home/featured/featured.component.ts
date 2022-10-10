import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
})
export class FeaturedComponent implements OnInit {
  //
  @Input() items: Product[] = [];
  constructor() {}

  ngOnInit(): void {}
}
