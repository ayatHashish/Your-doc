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



// addSlots() {
//   const data = {
//     start: new Date(),
//     end: new Date(),
//     duration: 30 // in minutes
//   };

//   this._addTime.addSlots(data).subscribe((res) => {
//     // Update the slots array with the newly added slot
//      this.slots.push(res.data);

//     console.log(this.slots)
//   });

