import { Component, OnInit } from '@angular/core';
import { ProductActionsService } from '../../../services/product-actions.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopbarComponent implements OnInit {
  //
  constructor(protected authService: AuthService) {}

  ngOnInit(): void {}

}
