import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../share/services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'app-re-assign-pass',
  templateUrl: './re-assign-pass.component.html',
  styleUrls: ['./re-assign-pass.component.scss', './../login/login.component.scss']
})

export class ReAssignPassComponent {


  constructor(private _auth: AuthService, private _ActivatedRoute: ActivatedRoute, private _router: Router, private formBuilder: FormBuilder,) { }
  errorMsg: string = '';
  id: any;

  passwordChangeForm: FormGroup = new FormGroup({
    user_id: new FormControl(''),
    password: new FormControl('', [Validators.required]),
    password_confirmation: new FormControl('', [Validators.required]),
  })

  get password() { return this.passwordChangeForm.get('password') }
  get confPass() { return this.passwordChangeForm.get('password_confirmation') }

  changePassword() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this.passwordChangeForm.patchValue({ user_id: this.id })

    if (this.passwordChangeForm.valid) {
      this._auth.changePasswordUpdata(this.passwordChangeForm.value).subscribe(
        (res) => {
          console.log(this.passwordChangeForm.value);
        },
        (e) => { this.errorMsg = e.error.error }
        ,
        () => this._router.navigateByUrl('auth/login')
      )
    } else {
      console.log("yallhwi");
    }
  }
}
