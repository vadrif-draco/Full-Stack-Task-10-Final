import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-details-form',
  templateUrl: './customer-details-form.component.html',
  styleUrls: ['./customer-details-form.component.css'],
})
export class CustomerDetailsFormComponent implements OnInit {
  //
  @Input() formType: string = '';
  @Input() customerData: any;
  @Output() formGroupDataEmitter: EventEmitter<FormGroup> = new EventEmitter();

  checkOutForm: FormGroup = new FormGroup({
    first_name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile_number: new FormControl('', [
      Validators.required,
      Validators.pattern('^[+]?[0-9][0-9 ]*$'),
    ]),
    address1: new FormControl('', [Validators.required]),
    address2: new FormControl('', []),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    zip_code: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(5),
      Validators.maxLength(9),
    ]),
  });

  constructor() {
    this.checkOutForm.valueChanges.subscribe({
      next: () => this.formGroupDataEmitter.emit(this.checkOutForm),
    });
  }

  ngOnInit(): void {
    this.checkOutForm.patchValue({
      first_name: this.customerData.first_name,
      last_name: this.customerData.last_name,
      email: this.customerData.email,
    });
  }
}
