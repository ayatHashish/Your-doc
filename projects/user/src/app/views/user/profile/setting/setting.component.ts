import { Component, Input } from '@angular/core';
import { ProfileService } from 'projects/user/src/app/share/services/profile.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

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
  profiles: any;
  updateDataJson: any = {};
  avatar: any;
  image: string = '';
  base64: string = '';
  imagediplay: any;
  cacheBuster: number = Date.now();

  birthDate = new Date();
  // bsRangeValue: Date[];
  maxDate = new Date();
  minDate = new Date();
  enabledDates!: Date[];

  constructor(private _update: ProfileService, public _profileService: ProfileService) {
    this.profile()
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 10);

    // this.minDate.setDate(this.minDate.getDate() - 1);
    // this.maxDate.setDate(this.maxDate.getDate() + 7);
    // this.bsRangeValue = [this.bsValue, this.maxDate];

  }

  updatedForm: FormGroup = new FormGroup({
    first_name: new FormControl(null),
    last_name: new FormControl(null),
    email: new FormControl(null),
    phone: new FormControl(null),
    avatar: new FormControl(null),
    gender: new FormControl(null),
    // birth_date: new FormControl(null),
  });

  // get first_name() { return this.updatedForm.get('first_name') }
  // get last_name() { return this.updatedForm.get('last_name') }
  // get email() { return this.updatedForm.get('email') }
  // get phone() { return this.updatedForm.get('phone') }
  // get gender() { return this.updatedForm.get('gender') }

  profile() {
    this._profileService.profile().subscribe((res) => {
      this.profiles = res.data
      this.birthDate = new Date(this.profiles.birth_date);
    });
  }



  //select image and convert it to base64
  selectimage(e: any) {
    // console.log(e);
    if (e.target.files.length > 0) {
      let file = e.target.files[0];
      this.image = file.name;
      this.converttobase64(file);
    }
  }
  converttobase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((base64) => {
      this.base64 = base64;
      this.imagediplay = base64;
      this.updateDataJson['avatar'] = `${this.base64}`;
      // console.log(this.updateDataJson);
      // console.log(this.base64);
    });
  }
  readFile(file: File, subscriber: Subscriber<any>) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      subscriber.next(fileReader.result);
      subscriber.complete();
    };
    fileReader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }

  onchangeInput(e: any) {
    e.stopPropagation();
    this.updateDataJson[`${e.target.name}`] = e.target.value;
    console.log(this.updateDataJson);
  }
  updated() {
    console.log(this.updateDataJson);
    if (this.updatedForm.valid) {
      this._update.update(this.updateDataJson).subscribe((res) => {
        console.log('Data updated successfully');
      });
    }
  }

  refreshImage() {
    this.cacheBuster = Date.now();
  }

}
