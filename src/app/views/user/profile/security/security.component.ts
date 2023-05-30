import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/share/services/profile.service';

import { CustomValidators } from 'ng2-validation';
@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss', './../details/details.component.scss']
})
export class SecurityComponent {

  constructor(private _update: ProfileService) { }
  errorMsg: string = '';
  password = new FormControl(null, CustomValidators.min(8));
  password_confirmation = new FormControl(
    '', CustomValidators.equalTo(this.password));

  updatePassword: FormGroup = new FormGroup({
    current_password: new FormControl(null, [Validators.required]),
    password: this.password,
    password_confirmation: this.password_confirmation
  })

  get newPassword() { return this.updatePassword.get('password') }
  get current_password() { return this.updatePassword.get('current_password') }
  get password_confirm() { return this.updatePassword.get('password_confirmation') }

  updatedpass() {
    if (this.updatePassword.valid) {
      this._update.update(this.updatePassword.value).subscribe(
        (res) => {
          console.log('Password updated successfully');
        },
        (e) => { this.errorMsg = e.error.error }
      )
    }
  }

}
