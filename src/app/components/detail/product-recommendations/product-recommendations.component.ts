import {
  Component,
  Input,
  OnInit,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Product } from '../../../interfaces/product';
import { ProductsService } from '../../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.css'],
})
export class ProductRecommendationsComponent implements OnInit, OnChanges {
  //
  @Input() categoryId: string = '';
  @Output() productsReady: EventEmitter<any> = new EventEmitter();
  recommendations: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    if (this.categoryId)
      this.productsService.getProductsByCategoryId(this.categoryId).subscribe({
        next: (response) => {
          this.recommendations = response.data;
          this.productsReady.emit();
        },
        error: (e: HttpErrorResponse) => {
          console.log('Error fetching recommended products: ', e.error);
        },
      });
  }
}
