import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../share/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private _auth: AuthService, private _router: Router) { }

  isSubmitted = false;
  errorMsg = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
    ]),
  });

  get email() { return this.loginForm.get("email") }
  get password() { return this.loginForm.get("password") }

  handlelogin() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value)
      this._auth.login(this.loginForm.value).subscribe(
        (res) => {
          // console.log(res)
          localStorage.setItem("token", res.token);
          localStorage.setItem("user_role", res.user_data.user_type);
          // console.log(res)
          this._auth.isLoggedIn = true;
        },
        (e) => {
          this.errorMsg = e.error.error;
          this._auth.isLoggedIn = false;
        },
        () => {
          this._router.navigateByUrl('/home');
        }
      );
    }
  }

}
