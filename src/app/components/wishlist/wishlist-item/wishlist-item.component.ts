import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductActionsService } from '../../../services/product-actions.service';

@Component({
  selector: 'app-wishlist-item',
  templateUrl: './wishlist-item.component.html',
  styleUrls: ['./wishlist-item.component.css'],
})
export class WishlistItemComponent implements OnInit {
  //
  math = Math;
  wishlisted: boolean = false;
  @Input() itemData: Product = {} as Product;
  @Output() wishlistChange: EventEmitter<any> = new EventEmitter();

  constructor(protected productActionsService: ProductActionsService) {}

  ngOnInit(): void {
    this.wishlisted = this.productActionsService.wishlist.includes(
      this.itemData.id
    );
  }

  wishlistToggle() {
    this.wishlisted = !this.wishlisted;
    if (this.wishlisted)
      this.productActionsService.addToWishlist(this.itemData.id);
    else this.productActionsService.removeFromWishlist(this.itemData.id);
    this.wishlistChange.emit()
  }
}
