import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  //
  shopProducts: Product[] = [];
  priceRanges: { min: number; max: number }[] = [{ min: -1, max: -1 }];
  colors: string[] = ['all'];
  sizes: string[] = ['all'];

  constructor(private shopProductsService: ProductsService) {}

  ngOnInit(): void {
    this.shopProductsService.getAllProducts().subscribe({
      next: (response) => {
        this.shopProducts = response.data;
        this.applyPriceRangeFilters();
        this.applyColorFilters();
        this.applySizeFilters();
        console.log(this.shopProducts);
      },
      error: (e: HttpErrorResponse) =>
        console.log('Error fetching shop products: ', e.error),
    });
  }

  updatePriceRangeFilters(e: //
  {
    event: any;
    priceRange: { min: number; max: number };
  }): void {
    if (e.event.target.checked) this.priceRanges.push(e.priceRange);
    else
      this.priceRanges.splice(
        this.priceRanges.findIndex(
          (priceRange) =>
            priceRange.min == e.priceRange.min &&
            priceRange.max == e.priceRange.max
        ),
        1
      );
    this.ngOnInit();
  }

  updateColorFilters(e: { event: any; color: string }): void {
    if (e.event.target.checked) this.colors.push(e.color);
    else this.colors.splice(this.colors.indexOf(e.color), 1);
    this.ngOnInit();
  }

  updateSizeFilters(e: { event: any; size: string }): void {
    if (e.event.target.checked) this.sizes.push(e.size);
    else this.sizes.splice(this.sizes.indexOf(e.size), 1);
    this.ngOnInit();
  }

  applyPriceRangeFilters(): void {
    if (this.priceRanges.length == 0) return;
    if (this.priceRanges.some((priceRange) => priceRange.min == -1)) return;
    this.shopProducts = this.shopProducts.filter((product) =>
      this.priceRanges.some((priceRange) => {
        // Either apply the range on the discounted price or the original price, you pick
        // ------------------------------------------------------------------------------
        // let discPrice = (1 - product.discount) * product.price;
        // return discPrice >= priceRange.min && discPrice < priceRange.max;
        return (
          product.price >= priceRange.min && product.price < priceRange.max
        );
      })
    );
  }

  applyColorFilters(): void {
    if (this.colors.length == 0) return;
    if (this.colors.includes('all')) return;
    this.shopProducts = this.shopProducts.filter((product) =>
      this.colors.includes(product.color)
    );
  }

  applySizeFilters(): void {
    if (this.sizes.length == 0) return;
    if (this.sizes.includes('all')) return;
    this.shopProducts = this.shopProducts.filter((product) =>
      this.sizes.includes(product.size)
    );
  }
}
