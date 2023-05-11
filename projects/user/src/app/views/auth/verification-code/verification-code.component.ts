import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../share/services/auth.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss', './../login/login.component.scss']
})
export class VerificationCodeComponent {
  errorMsg = ""

  constructor(private _auth: AuthService, private _router: Router) { }
  verificationCodeForm = new FormGroup({
      verification_code: new FormControl(''),
    });

    verificationCode() {
const code = this.verificationCodeForm.value.verification_code;
    if (this.verificationCodeForm.valid) {
      this._auth.verificationCode(code).subscribe(
        (res) => {},
        (e) => {this.errorMsg = e.error.error;},
        () => { this._router.navigateByUrl('/auth/login');}
      );
    }
  }
}
