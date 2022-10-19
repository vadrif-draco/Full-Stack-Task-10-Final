import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductActionsService } from '../../services/product-actions.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  //
  wishlistedProducts: Product[] = [];
  constructor(private productActionsService: ProductActionsService) {}

  ngOnInit(): void {
    this.wishlistedProducts =
      this.productActionsService.getWishlistedProducts();
  }
}
