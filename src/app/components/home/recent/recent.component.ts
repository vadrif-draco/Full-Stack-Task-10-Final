import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../interfaces/product';

@Component({
  selector: 'app-recent',
  templateUrl: './recent.component.html',
  styleUrls: ['./recent.component.css'],
})
export class RecentComponent implements OnInit {
  //
  @Input() items: Product[] = [];
  constructor() {}

  ngOnInit(): void {}
}
