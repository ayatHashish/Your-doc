import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../share/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss', './../login/login.component.scss']
})
export class VerificationCodeComponent {
  errorMsg = ""
  user_id: any
  constructor(private _auth: AuthService, private _router: Router) { }
  verificationCodeForm = new FormGroup({
  verification_code: new FormControl('', [Validators.required,  Validators.pattern(/^\d{6}$/)]),
  });

  get verification() { return this.verificationCodeForm.get('verification_code') }

  verificationCode() {
    const code = this.verificationCodeForm.value.verification_code;
    if (this.verificationCodeForm.valid) {
      this._auth.verificationCode(code).subscribe(
        (res) => {
          this.user_id = res.user_id; },

        (e) => { this.errorMsg = e.error.error; },
        () => { this._router.navigateByUrl('/auth/editpassword/' + this.user_id); }
      );
    }
  }
}
