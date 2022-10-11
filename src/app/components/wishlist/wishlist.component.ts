import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css'],
})
export class WishlistComponent implements OnInit {
  //
  wishlistedProducts: Product[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.wishlistedProducts = this.productsService.getWishlistedProducts();
  }

  reload(): void {
    this.ngOnInit();
  }
}
