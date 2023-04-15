import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Slots } from '../../../../interfaces/slots';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.scss', './../details/details.component.scss',]
})
export class TimeslotsComponent {
  @Input() myData: any;
  allSlots: any

  constructor(private _addTime: TimeslotService, private _router: Router  ,private fb: FormBuilder) {
    this.allTime()

  }
  allTime() {
    this._addTime.getAllSlots().subscribe((res) => {
      this.allSlots = res.data
    });
  }


  deleteSlot(id: number): void {
    this._addTime.deleteslots(id).subscribe(
      () => console.log("ddddd"),

      error => console.error(error)
    );
  }
    // createSlot(){
    // slot.id = this.slots.length + 1;
    // slot.startTime = this.creatForm.value;

    // this.slots.push(slot);
    // this.creatForm.reset();
  // }

  }

