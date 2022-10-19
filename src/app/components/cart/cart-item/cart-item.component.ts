import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OrderItem } from '../../../interfaces/order';
import { Product } from '../../../interfaces/product';

@Component({
  selector: '[app-cart-item]',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  //
  @Input() orderData: OrderItem = {} as OrderItem;
  @Output() incQuantity: EventEmitter<Product> = new EventEmitter();
  @Output() decQuantity: EventEmitter<Product> = new EventEmitter();
  @Output() delProduct: EventEmitter<Product> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
