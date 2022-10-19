import { Component, OnInit } from '@angular/core';
import { ProductActionsService } from '../../../services/product-actions.service';

@Component({
  selector: 'app-order-info',
  templateUrl: './order-info.component.html',
  styleUrls: ['./order-info.component.css'],
})
export class OrderInfoComponent implements OnInit {
  //
  constructor(protected productActionsService: ProductActionsService) {}

  ngOnInit(): void {}
}
