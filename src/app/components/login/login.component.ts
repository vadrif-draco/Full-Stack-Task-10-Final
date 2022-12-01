import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  login(): void {
    this.loginForm.disable();
    this.authService.login(this.loginForm.value).subscribe({
      next: (data) => {
        console.log(data)
        this.authService.saveLoginData(data);
        this.router.navigate(['/home']);
      },
      error: (e: HttpErrorResponse) => {
        alert(e.error.message);
        console.log(e);
        this.loginForm.reset();
        this.loginForm.enable();
      },
    });
  }
}
