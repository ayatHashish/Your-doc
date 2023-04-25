import { Component, Input } from '@angular/core';
import { ProfileService } from 'projects/user/src/app/share/services/profile.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: [
    './setting.component.scss',
    './../details/details.component.scss',
  ],
})
export class SettingComponent {
  @Input() profilesetting: any;
  showconfirmpassword: boolean = false;
  showoldpassword: boolean = false;
  shownewpassword: boolean = false;
  countries: any = [];
  userdata: any = [];
  updateDataJson: any = {};
  image: string = '';
  base64: string = '';
  divtoggle: boolean = false;
  divtoggletext: boolean = true;
  imagediplay: any;

  constructor(private _update: ProfileService, private _router: Router) {}

  onchangeInput(e: any) {
    e.stopPropagation();
    this.updateDataJson[`${e.target.name}`] = e.target.value;
    console.log(this.updateDataJson);
  }

  updatedForm: FormGroup = new FormGroup({
    first_name: new FormControl(null, [Validators.required]), // form control in angular mean input
    last_name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    avatar: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    current_password: new FormControl(null, [Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required]),
    gender: new FormControl(null, [Validators.required]),
    birth_date: new FormControl(null, [Validators.required]),
    address: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required]),
    // password: this.password,
    // password_confirmation: this.password_confirmation,
  });

  // getuserdata() {
  //   this._AuthService.getuserdata().subscribe((res) => {
  //     this.userdata = res.data;
  //     this.imagediplay = res.data[0].image;
  //     this.onedit();
  //   });
  // }
  //edit for make data at input to update it
  onedit() {
    this.updatedForm.controls['first_name'].setValue(
      this.userdata[0]?.first_name
    );
    this.updatedForm.controls['last_name'].setValue(
      this.userdata[0]?.last_name
    );
    this.updatedForm.controls['phone'].setValue(this.userdata[0]?.phone);
    this.updatedForm.controls['email'].setValue(this.userdata[0]?.email);
    this.updatedForm.controls['country_id'].setValue(
      this.userdata[0]?.country_id
    );
    this.updatedForm.controls['address'].setValue(
      this.userdata[0].address[0]?.address
    );
    // this.updatedForm.controls['address2'].setValue(
    //   this.userdata[0].address[0]?.address2
    // );
    this.updatedForm.controls['city'].setValue(
      this.userdata[0].address[0]?.city
    );
  }

  updated() {
    this._update.update('data:any').subscribe((res) => {
      console.log(res);
    });
  }
}
