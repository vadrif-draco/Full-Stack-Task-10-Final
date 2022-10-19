import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  ValidationErrors,
  AbstractControl,
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  //

  matchingPasswordsValidator: ValidatorFn = (
    formGroup: AbstractControl
  ): ValidationErrors | null => {
    let pass = formGroup.get('password')?.value;
    let confirmPass = formGroup.get('password_confirm')?.value;
    return pass === confirmPass ? null : { matching: true };
  };

  registrationForm = new FormGroup(
    {
      first_name: new FormControl('', [Validators.required]),
      last_name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      password_confirm: new FormControl('', [Validators.required]),
    },
    { validators: [this.matchingPasswordsValidator] }
  );

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  register(): void {
    this.registrationForm.disable();
    let registrationFormData = this.registrationForm.value;
    let registrationInfo = {
      first_name: registrationFormData.first_name!,
      last_name: registrationFormData.last_name!,
      email: registrationFormData.email!,
      password: registrationFormData.password!,
    };
    this.authService.register(registrationInfo).subscribe({
      next: (data) => {
        this.authService.saveLoginData(data);
        this.router.navigate(['/home']);
      },
      error: (e: HttpErrorResponse) => {
        alert(e.error);
        console.log(e);
        this.registrationForm.reset();
        this.registrationForm.enable();
      },
    });
  }
}
