import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../../interfaces/product';
import { ProductActionsService } from '../../../../services/product-actions.service';

@Component({
  selector: 'app-featured-item',
  templateUrl: './featured-item.component.html',
  styleUrls: ['./featured-item.component.css'],
})
export class FeaturedItemComponent implements OnInit {
  //
  math = Math;
  wishlisted: boolean = false;
  @Input() itemData: Product = {} as Product;

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
  }
}
