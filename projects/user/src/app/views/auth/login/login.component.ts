import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../share/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(public modalRef: MdbModalRef<LoginComponent>,
    private _auth: AuthService,
    private _router: Router) { }

  isSubmitted = false;
  errorMsg = '';
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ]),
  });

  get email() { return this.loginForm.get("email") }
  get password() { return this.loginForm.get("password") }

  handlelogin() {
    if (this.loginForm.valid) {
      // console.log(this.loginForm.value)
      this._auth.login(this.loginForm.value).subscribe(
        (res) => {
          console.log(res);
        },
        (e) => {
          console.log(e);
          this.errorMsg = "bye-bye";
        },
        () => {
          this._router.navigateByUrl('/home');
        }
      );
    }
  }

}
