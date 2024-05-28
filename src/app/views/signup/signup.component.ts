import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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

  // Inject HttpClient in the constructor
  constructor(private http: HttpClient) {}

  signUpCreate() {
    console.log('sign up clicked');
  }

  Create() {
    console.log('login in');
    console.log(this.email);
    console.log(this.username);
    console.log(this.password);
    console.log(this.fullname);


     // Example GET request to a backend endpoint 'http://127.0.0.1:8000'
     this.http.get<any>('http://127.0.0.1:8000').subscribe(
      (response) => {
        console.log('Response:', response);
        // Handle the response here
      },
      (error) => {
        console.error('Error:', error);
        // Handle errors here
      }
    ); 
  }
}
