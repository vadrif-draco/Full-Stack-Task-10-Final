import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class CheckoutGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(route: any, state: any): any {
    //
    if (this.authService.hasLoginData()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
