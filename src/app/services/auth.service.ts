import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export interface LoginResponse {
  _id: string; // '6346ac23bb862e01fe4b6535';
  __v: number; // 0;
  first_name: string; // 'Ramy';
  last_name: string; // 'Ibrahim';
  email: string; // 'ramymibrahim@yahoo.com';
  token: string; // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM...';
  password: string; // '$2a$10$hj2n9SEZY6NnX68hcYQXeOuc9/ENmAW3SHINikvn0K43fU...';
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //
  constructor(private httpClient: HttpClient, private router: Router) {}

  register(data: {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
  }): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiURL}/users/register`,
      data
    );
  }

  login(data: { email: string; password: string }): Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(
      `${environment.apiURL}/users/login`,
      data
    );
  }

  addOrder(data: any): Observable<any> {
    return this.httpClient.post<any>(
      `${environment.apiURL}/orders`, //
      data,
      {
        headers: {
          'x-access-token': this.getLoginToken(),
        },
      }
    );
  }

  saveLoginData(data: any) {
    localStorage.setItem('loginData', JSON.stringify(data));
  }

  hasLoginData(): boolean {
    return localStorage.getItem('loginData') != null;
  }

  loadLoginData(): any {
    let loginDataRaw = localStorage.getItem('loginData');
    return loginDataRaw ? JSON.parse(loginDataRaw)?.data.user : '';
  }

  getLoginToken(): string {
    let loginDataRaw = localStorage.getItem('loginData');
    return loginDataRaw ? JSON.parse(loginDataRaw).data["x-access-token"] : '';
  }

  getFullName(): string {
    let loginData = this.loadLoginData();
    return loginData
      ? `${loginData.first_name} ${loginData.last_name}`
      : 'My Account';
  }

  logout() {
    localStorage.removeItem('loginData');
    this.router.navigate(['/home']);
  }
}
