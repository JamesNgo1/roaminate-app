import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  email: string = '';
  fullname: string = '';
  username: string = '';
  password: string = '';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [Validators.required]);

  fullnameFormControl = new FormControl('', [Validators.required]);

  usernameFormControl = new FormControl('', [Validators.required]);

  signUpCreate() {
    console.log('sign up clicked');
  }

  Create() {
    console.log('login in');
    console.log(this.email);
    console.log(this.username);
    console.log(this.password);
    console.log(this.fullname);
    console.log(this.email);
  }
}
