import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../share/services/auth.service';
import { DoctorsService } from '../../../share/services/doctors.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', './../login/login.component.scss']
})

export class RegisterComponent {
  selectedOption = 'user';
  role:any = ""
  specialties :any
  isVisible = false;
  constructor(
    private _auth: AuthService,
    private _router: Router,
    private formBuilder: FormBuilder,
    private _specialty:DoctorsService) {
      this.role= localStorage.getItem("user_role");

      this. getAllSpecialties()
    }

  errorMsg = '';
  isSubmitted = false;
  regesterForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    ]),
    password_confirmation: new FormControl('', [
      Validators.required
    ]),
    phone: new FormControl('', [Validators.required]),
    user_type: new FormControl('', [Validators.required]),

    specialty_id: new FormControl('', [Validators.required]),
    // birth_date: new FormControl('', [Validators.required]),
    // address: new FormControl('', [Validators.required]),
    // state: new FormControl('', [Validators.required]),
    // country: new FormControl('', [Validators.required]),
    // avatar: new FormControl('', [Validators.required]),

  });

  get name() { return this.regesterForm.get('name') }
  get email() { return this.regesterForm.get('email') }
  get password() { return this.regesterForm.get('password') }
  get confPass() { return this.regesterForm.get('password_confirmation') }
  get phone() { return this.regesterForm.get('phone') }
  get user_type() { return this.regesterForm.get('user_type') }
  get specialty() { return this.regesterForm.get('specialty_id') }
  // get age() { return this.regesterForm.get('age') }
  // get address() { return this.regesterForm.get('address') }
  // get state() { return this.regesterForm.get('state') }
  // get country() { return this.regesterForm.get('country') }
  // get avatar() { return this.regesterForm.get('avatar') }

  checkPasswordForm = this.formBuilder.group(
    {
      password: this.password,
      confirmPassword: this.confPass,
    },
    {
      validator: this.ConfirmedValidator('password', 'confirmPassword'),
    }
  );

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (
        matchingControl.errors &&
        !matchingControl.errors['confirmedValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  handleRegister() {
    this._auth.register(this.regesterForm.value).subscribe(
      (res) => {
        console.log(res);
      },
      (e) => {
        this.errorMsg = e.error.error;
        console.log(e);
      },
      () => {
        this._router.navigateByUrl('auth/login');
      }
    );
   // console.log(this.regesterForm.value)

  }
  getAllSpecialties(){
    this._specialty.allSpatialists().subscribe((res) => {
      this.specialties = res.data
    });

  }

  onDependentInputChange(){
    this.isVisible = true;
  }
  onDependentInputChangeUser(){
    this.isVisible = false;
  }
}
