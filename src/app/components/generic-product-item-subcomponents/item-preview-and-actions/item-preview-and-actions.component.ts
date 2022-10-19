import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductActionsService } from '../../../services/product-actions.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-item-preview-and-actions',
  templateUrl: './item-preview-and-actions.component.html',
  styleUrls: ['./item-preview-and-actions.component.css'],
})
export class ItemPreviewAndActionsComponent implements OnInit {
  //
  @Input() imageUrl: string = '';
  @Input() name: string = '';
  @Input() id: string = '';

  alert_ = alert

  wishlisted: boolean = false;

  constructor(
    protected productsService: ProductsService,
    protected productActionsService: ProductActionsService
  ) {}

  ngOnInit(): void {
    this.wishlisted =
      this.productActionsService.wishlist //
        .findIndex((item) => item._id == this.id) != -1;
  }

  wishlistToggle() {
    this.wishlisted = !this.wishlisted;
    if (this.wishlisted) this.productActionsService.addToWishlistById(this.id);
    else this.productActionsService.removeFromWishlist(this.id);
  }
}
