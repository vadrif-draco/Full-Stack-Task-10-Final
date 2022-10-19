import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-rating',
  templateUrl: './item-rating.component.html',
  styleUrls: ['./item-rating.component.css'],
})
export class ItemRatingComponent implements OnInit {
  //
  math = Math;
  @Input() rating: number = 0;
  @Input() rating_count: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
