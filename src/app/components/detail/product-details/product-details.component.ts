import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductActionsService } from '../../../services/product-actions.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  //
  cartTimes: number = 1;
  @Input() product: Product = {} as Product;

  constructor(protected productActionsService: ProductActionsService) {}

  ngOnInit(): void {}

  addToCartN(): void {
    for (let i = 0; i < this.cartTimes; i++)
      this.productActionsService.addToCart(this.product);
  }
}
