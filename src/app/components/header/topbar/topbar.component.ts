import { Component, OnInit } from '@angular/core';
import { ProductActionsService } from '../../../services/product-actions.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  //
  constructor() {}

  ngOnInit(): void {}

  getOrdersNum(): number {
    return 3;
  }
}
