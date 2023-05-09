import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../share/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.scss' ,'./../login/login.component.scss']
})
export class ForgetpassComponent {


  constructor(private _auth: AuthService, private _router: Router) { }
  forgotPasswordForm: FormGroup = new FormGroup({
    email: new FormControl(),
  });

  forgetpassword() {
const email = this.forgotPasswordForm.value.email;
this._auth.forgetPassword(email).subscribe(
  (response) => {
    // Handle successful response
    console.log(response);
  },
)
  }
}
