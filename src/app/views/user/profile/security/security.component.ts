import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/share/services/profile.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss', './../details/details.component.scss']
})

export class SecurityComponent {

  constructor(private _update: ProfileService) { }

  errorMsg: string = '';

  updatePassword: FormGroup = new FormGroup({
    current_password: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required]),
  })


  get current_password() { return this.updatePassword.get('current_password') }
  get newPassword() { return this.updatePassword.get('password') }
  get password_confirm() { return this.updatePassword.get('password_confirmation') }

  updatedpass() {
    if (this.updatePassword.valid) {
      this._update.update_password(this.updatePassword.value).subscribe(
        (res) => {
          console.log('Password updated successfully');
        },
        (e) => { this.errorMsg = e.error.error }
      )
    }
  }

}
