import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'projects/user/src/app/share/services/profile.service';


@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss','./../details/details.component.scss']
})
export class SecurityComponent {

  constructor(private _update: ProfileService, private _router: Router) {}

  passwordForm: FormGroup = new FormGroup({
    password: new FormControl(null, [Validators.required]),
    current_password: new FormControl(null, [Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required]),
    // password: this.password,
    // password_confirmation: this.password_confirmation,
  });

  get newPassword (){return this.passwordForm.get('newPassword')}
  get current_password (){return this.passwordForm.get('current_password')}
  get password_confirmation (){return this.passwordForm.get('password_confirmation')}

  // changePassword() {
  //   // const {old_password, new_password} = f.value;
  //   this._update.update({old_password, new_password}).subscribe(
  //     () => console.log('Success!'),

  //     () => console.log('A problem occurred..'));
  // }
  // updatePassword() {
  //   if (this.newPassword.value !== this.current_password.value) {
  //     // show error message that confirm password does not match new password
  //     return;
  //   }
  //   this._update.update.subscribe(
  //     response => {
  //       // handle successful password update
  //     },
  //     error => {
  //       // handle error updating password
  //     }
  //   );
  // }


}
