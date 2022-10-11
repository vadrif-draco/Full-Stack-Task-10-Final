import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductActionsService } from '../../../../services/product-actions.service';

@Component({
  selector: 'app-shop-product-area-item',
  templateUrl: './shop-product-area-item.component.html',
  styleUrls: ['./shop-product-area-item.component.css'],
})
export class ShopProductAreaItemComponent implements OnInit {
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
