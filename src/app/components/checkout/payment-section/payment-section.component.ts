import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-payment-section',
  templateUrl: './payment-section.component.html',
  styleUrls: ['./payment-section.component.css'],
})
export class PaymentSectionComponent implements OnInit {
  //
  @Output() placeOrderEmitter: EventEmitter<any> = new EventEmitter();
  @Input() placeOrderDisabled: boolean = true

  constructor() {}

  ngOnInit(): void {}
}
