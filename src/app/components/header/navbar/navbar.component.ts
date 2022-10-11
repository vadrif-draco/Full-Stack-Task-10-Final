import { Component, OnInit } from '@angular/core';
import { ProductActionsService } from '../../../services/product-actions.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  //
  constructor(protected productActionsService: ProductActionsService) {}

  ngOnInit(): void {}
}
