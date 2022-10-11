import { Component, OnInit } from '@angular/core';
import { Order } from '../../interfaces/order';
import { ProductActionsService } from '../../services/product-actions.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //
  order: Order = {} as Order;
  constructor(protected productActionsService: ProductActionsService) {}

  ngOnInit(): void {
    this.order = this.productActionsService.order;
  }
  incQuantityOf(p: Product): void {
    this.productActionsService.addToCart(p);
    // this.ngOnInit();
  }
  decQuantityOf(p: Product): void {
    this.productActionsService.removeFromCart(p);
    // this.ngOnInit();
  }
  deleteProduct(p: Product): void {
    this.productActionsService.deleteFromCart(p);
    // this.ngOnInit();
  }
}
