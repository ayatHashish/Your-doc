import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../share/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-re-assign-pass',
  templateUrl: './re-assign-pass.component.html',
  styleUrls: ['./re-assign-pass.component.scss', './../login/login.component.scss']
})
export class ReAssignPassComponent {

  constructor(private _auth: AuthService, private _router: Router) { }
  errorMsg = '';
  passwordChangeForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required, Validators.email]),
    confirmPassword: new FormControl('', [Validators.required,]),

  });

  get newPassword() { return this.passwordChangeForm.get("newPassword") }
  get confirmPassword() { return this.passwordChangeForm.get("confirmPassword") }
  changePassword() {
    if (this.newPassword?.value == this.confirmPassword?.value) {
      this._auth.changePassword(this.passwordChangeForm.value).subscribe(
        (res) => {
          console.log('lollllloy')
        },
        (e) => {
          console.log('yalllawi')
          // this.errorMsg = e.error.password
          // console.log(this.errorMsg)
        },
        () => {
          this._router.navigateByUrl('auth//login');
        }
      );
    }
    //  else {
    //   this._router.navigateByUrl('auth/login');}



  }
}
