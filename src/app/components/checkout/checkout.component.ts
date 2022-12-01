import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup } from '@angular/forms';
import { ProductActionsService } from '../../services/product-actions.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  //
  loginData: any;
  billingDetails: FormGroup = {} as FormGroup;
  shippingDetails: FormGroup = {} as FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private productActionsService: ProductActionsService
  ) {}

  ngOnInit(): void {
    this.loginData = this.authService.loadLoginData();
  }

  submit(): void {
    let orderData = {
      sub_total_price: this.productActionsService.getCartSubtotal(),
      shipping: this.productActionsService.getCartShipping(),
      total_price: this.productActionsService.getCartTotal(),
      user_id: this.loginData._id,
      order_date: new Date().toISOString().slice(0, 10),
      order_details: this.productActionsService.order.items.map((item) => {
        return {
          product_id: item.product._id,
          price: (1 - item.product.discount) * item.product.price,
          qty: item.quantity,
        };
      }),
      shipping_info: this.billingDetails.value,
    };
    this.authService.addOrder(orderData).subscribe({
      next: (v) => {
        alert(
          `Your order has been processed successfully!` +
            `\nReturning you to the homepage now...`
        );
        this.router.navigate(['/home']);
        console.log(v);
      },
      error: (e: HttpErrorResponse) => {
        alert(`Error processing your order: ${e.error.message}`);
        console.log(e);
      },
    });
  }
}
