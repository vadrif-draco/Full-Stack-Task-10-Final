import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { HttpErrorResponse } from '@angular/common/http';
declare const $: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  //
  id: string = 'null';
  product: Product = {} as Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    if (this.id == 'null') {
      let id = this.route.snapshot.paramMap.get('id');
      if (id) {
        this.id = id;
        this.productsService.getProductById(this.id).subscribe({
          next: (response) => (this.product = response.data),
          error: (e: HttpErrorResponse) =>
            console.log('Error fetching product by ID: ', e.error),
        });
      }
    }
  }

  jqueryForCarousel() {
    setTimeout(() => {
      $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        },
      });
    }, 0); // This cheeky setTimeout move is needed because this jquery gets called before items are rendered
  }
}
