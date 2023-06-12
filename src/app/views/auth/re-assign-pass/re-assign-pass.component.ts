import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../../../share/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-re-assign-pass',
  templateUrl: './re-assign-pass.component.html',
  styleUrls: ['./re-assign-pass.component.scss', './../login/login.component.scss']
})

export class ReAssignPassComponent {

  constructor(private _auth: AuthService, private _ActivatedRoute: ActivatedRoute) { }
  errorMsg: string = '';
  id: any

  password = new FormControl(null, CustomValidators.min(8));
  password_confirmation = new FormControl('', CustomValidators.equalTo(this.password));
  passwordChangeForm: FormGroup = new FormGroup({
    user_id: new FormControl(''),
    password: new FormControl(''),
    password_confirmation: new FormControl(''),
  })

  changePassword() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.passwordChangeForm.patchValue({ user_id: this.id })

    if (this.passwordChangeForm.valid) {
      this._auth.changePasswordUpdata(this.passwordChangeForm.value).subscribe(
        (res) => {
          console.log('Password updated successfully');
        },
        (e) => { this.errorMsg = e.error.error }
      )
    }

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
