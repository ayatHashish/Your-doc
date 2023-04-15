import { Component } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss', './../login/login.component.scss']
})
export class TestComponent {
  constructor() { }

  ngOnInit() {

  }


  // slots: Slots[] = [];

  // constructor(private _addTime: TimeslotService, private _router: Router ,private fb: FormBuilder) {
  //   // this.addSlots()
  // }
  // creatForm = new FormGroup({
  //   startTime: new FormControl('', [Validators.required,]),
  //   endTime: new FormControl('', [Validators.required, ]),

  // });

  // get startTime (){return this.creatForm.get("startTime")}
  // get endTime (){return this.creatForm.get("endTime")}

  // createSlot(){
  //    const slot = new this.Slots.[];


  //   slot.id = this.slots.length + 1;
  //   // slot.startTime = this.creatForm.value;

  //   this.slots.push(slot);
  //   this.creatForm.reset();
  // }

  // updateSlot(slot: Slot): void {
  //   const index = this.slots.findIndex(s => s.id === slot.id);
  //   this.slots[index] = slot;
  // }

  // deleteSlot(slot: Slot): void {
  //   const index = this.slots.findIndex(s => s.id === slot.id);
  //   this.slots.splice(index, 1);
  // }
}
// addSlots() {
//   this._addTime.addSlots("data").subscribe((res) => {
//     this.slots = res.data

//   });
// }



//   addSlots(){
//     this._addTime.addSlots(this.slots).subscribe( res =>{

//       // this._router.navigate(['/']);
//  console.log(res);
//     },
//     error =>
//     console.log(error));
//   }



//   onSubmit(){
//     console.log(this.slots);
//     this.addSlots();
//   }



// // addSlots() {
// //   const data = {
// //     start: new Date(),
// //     end: new Date(),
// //     duration: 30 // in minutes
// //   };

// //   this._addTime.addSlots(data).subscribe((res) => {
// //     // Update the slots array with the newly added slot
// //      this.slots.push(res.data);

// //     console.log(this.slots)
// //   });

// import {
//   Component,
//   OnInit,
//   OnChanges,
//   SimpleChanges,
//   ViewChild,
//   AfterViewInit,
//   Input,
// } from '@angular/core';
// // import {
// //   AbstractControl,
// //   FormArray,
// //   FormControl,
// //   FormGroup,
// //   ValidationErrors,
// //   ValidatorFn,
// //   Validators,
// // } from '@angular/forms';
// import { AuthService } from '../auth.service';
// // import { Setting } from './../../setting';
// // import { Observable, Subscriber } from 'rxjs';
// // import { CustomValidators } from 'ng2-validation';

// // @Component({
// //   selector: 'lib-affsetting',
// //   templateUrl: './affsetting.component.html',
// //   styleUrls: ['./affsetting.component.css'],
// // })
// export class AffsettingComponent implements OnInit {
//   constructor(private _AuthService: AuthService) {
//     this.getcountry();
//     this.getuserdata();
//   }
//   showconfirmpassword: boolean = false;
//   showoldpassword: boolean = false;
//   shownewpassword: boolean = false;
//   countries: any = [];
//   userdata: any = [];
//   updateDataJson: any = {};
//   image: string = '';
//   base64: string = '';
//   divtoggle: boolean = false;
//   divtoggletext: boolean = true;
//   imagediplay: any;

//   onchangeInput(e: any) {
//     e.stopPropagation();
//     this.updateDataJson[`${e.target.name}`] = e.target.value;
//     console.log(this.updateDataJson);
//   }

//   ngOnInit(): void { }
//   divtoggleteext() {
//     this.divtoggletext = !this.divtoggletext;
//   }
//   password = new FormControl(null);
//   password_confirmation = new FormControl(
//     '',
//     CustomValidators.equalTo(this.password)
//   );

//   // formgroup for edit and update profile
//   updatedForm: FormGroup = new FormGroup({
//     first_name: new FormControl(null, [Validators.required]), // form control in angular mean input
//     last_name: new FormControl(null, [Validators.required]),
//     email: new FormControl(null, [Validators.required]),
//     country_id: new FormControl(null, [Validators.required]),
//     phone: new FormControl(null, [Validators.required]),
//     image: new FormControl(null, [Validators.required]),
//     company_name: new FormControl(null, [Validators.required]),
//     site_url: new FormControl(null, [Validators.required]), // form control in angular mean input
//     skype: new FormControl(null, [Validators.required]),
//     whatsapp: new FormControl(null, [Validators.required]),
//     about_us: new FormControl(null, [Validators.required]),
//     current_password: new FormControl(null),
//     password: this.password,
//     password_confirmation: this.password_confirmation,

//     // address: new FormGroup({
//     address: new FormControl(null, [Validators.required]),
//     address2: new FormControl(null),
//     city: new FormControl(null, [Validators.required]),
//     region: new FormControl(null, [Validators.required]),
//     zipcode: new FormControl(null, [Validators.required]),
//     // })
//   });

//   submitregistire(submitinfo: FormGroup) {
//     this.updateDataJson['image'] = `${this.base64}`;
//     this.onupdate(this.updateDataJson);
//     this.getuserdata()
//     console.log(this.updateDataJson);
//   }

//   getuserdata() {
//     this._AuthService.getuserdata().subscribe((res) => {
//       this.userdata = res.data;
//       this.imagediplay = res.data[0].image;
//       this.onedit();
//     });
//   }

//   //get all country to display in select
//   getcountry() {
//     this._AuthService.getcountry().subscribe((res) => {
//       this.countries = res.countries;
//     });
//   }

//   //edit for make data at input to update it
//   onedit() {
//     this.updatedForm.controls['first_name'].setValue(
//       this.userdata[0]?.first_name
//     );
//     this.updatedForm.controls['last_name'].setValue(
//       this.userdata[0]?.last_name
//     );
//     this.updatedForm.controls['phone'].setValue(this.userdata[0]?.phone);
//     this.updatedForm.controls['whatsapp'].setValue(this.userdata[0]?.whatsapp);
//     this.updatedForm.controls['email'].setValue(this.userdata[0]?.email);
//     this.updatedForm.controls['country_id'].setValue(
//       this.userdata[0]?.country_id
//     );
//     this.updatedForm.controls['site_url'].setValue(
//       this.userdata[0]?.site_url
//     );
//     this.updatedForm.controls['company_name'].setValue(
//       this.userdata[0]?.company_name
//     );
//     this.updatedForm.controls['address'].setValue(
//       this.userdata[0].address[0]?.address
//     );
//     this.updatedForm.controls['address2'].setValue(
//       this.userdata[0].address[0]?.address2
//     );
//     this.updatedForm.controls['skype'].setValue(this.userdata[0]?.skype);
//     this.updatedForm.controls['region'].setValue(
//       this.userdata[0].address[0]?.region
//     );
//     this.updatedForm.controls['city'].setValue(
//       this.userdata[0].address[0]?.city
//     );
//     this.updatedForm.controls['zipcode'].setValue(
//       this.userdata[0].address[0]?.zipcode
//     );
//   }
//   onupdate(updateddata: any) {
//     this._AuthService.updatedata(updateddata).subscribe((res) => {
//       console.log(res);
//     });
//   }

//   //select image and convert it to base64
//   selectimage(e: any) {
//     console.log(e);
//     if (e.target.files.length > 0) {
//       let file = e.target.files[0];
//       this.image = file.name;
//       this.converttobase64(file);
//       console.log('image');
//     }
//   }
//   converttobase64(file: File) {
//     const observable = new Observable((subscriber: Subscriber<any>) => {
//       this.readFile(file, subscriber);
//     });

//     observable.subscribe((base64) => {
//       this.base64 = base64;
//       this.imagediplay = base64;
//       console.log(this.base64);
//     });
//   }
//   readFile(file: File, subscriber: Subscriber<any>) {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       subscriber.next(fileReader.result);
//       subscriber.complete();
//     };
//     fileReader.onerror = () => {
//       subscriber.error();
//       subscriber.complete();
//     };
//   }
//   // for show && hide password
//   toogleconfirmpassword() {
//     this.showconfirmpassword = !this.showconfirmpassword;
//   }
//   toogleoldpassword() {
//     this.showoldpassword = !this.showoldpassword;
//   }
//   tooglenewpassword() {
//     this.shownewpassword = !this.shownewpassword;
//   }

//   // for add skype input by add button
//   addinputskype() {
//     this.divtoggle = true;
//   }

//   // for remove  skype input by minus icon
//   removeinputskype() {
//     this.divtoggle = false;
//     this.divtoggletext = true;
//   }
// }
