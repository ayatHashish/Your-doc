import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../share/services/auth.service';
import { Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-re-assign-pass',
  templateUrl: './re-assign-pass.component.html',
  styleUrls: ['./re-assign-pass.component.scss', './../login/login.component.scss']
})
export class ReAssignPassComponent {

 constructor(private _auth: AuthService, private _router: Router) { }
  errorMsg: string = '';
  // password = new FormControl(null, CustomValidators.min(8));
  // password_confirmation = new FormControl(
  //   '', CustomValidators.equalTo(this.password));

  passwordChangeForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    // password: this.password,
    password_confirmation: new FormControl('')
  })

  // get newPassword() { return this.passwordChangeForm.get('password') }
  // get password_confirm() { return this.passwordChangeForm.get('password_confirmation') }

  changePassword() {
    // if (this.passwordChangeForm.valid) {
    //   this._auth.changePassword(this.passwordChangeForm.value).subscribe(
    //     (res) => {
    //       console.log('Password updated successfully');
    //     },
    //     (e) => { this.errorMsg = e.error.error }
    //   )
    // }
  }
}
