import { Component, Input } from '@angular/core';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Slots } from '../../../../../interfaces/slots';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.scss', '../editslot/editslot.component.scss',]
})
export class AddTimeComponent {

  @Input() myData: any;
  addresses: [] = []
  errorMsg = '';

  constructor(private _addTime: TimeslotService, private _router: Router) {
    this.addrees()
    // this.createSlot()
  }

  creatSlotForm = new FormGroup({
    address_id: new FormControl('', [Validators.required,]),
    day_ar: new FormControl('', [Validators.required,]),
    day_en: new FormControl('', [Validators.required,]),
    start_time: new FormControl('', [Validators.required,]),
    end_time: new FormControl('', [Validators.required,]),
  });

  get address() { return this.creatSlotForm.get("address_id") }
  get day_en() { return this.creatSlotForm.get("day_en") }
  get day_ar() { return this.creatSlotForm.get("day_ar") }
  get startTime() { return this.creatSlotForm.get("start_time") }
  get endTime() { return this.creatSlotForm.get("end_time") }

  addrees() {
    this._addTime.getAddress().subscribe((res) => {
      this.addresses = res.data
    });
  }

  createSlot() {
    this._addTime.addSlot(this.creatSlotForm.value).subscribe(
      (res) => {
        // console.log(res)
      },
      (e) => {
        this.errorMsg = e.error.error;
      },
      () => {
        this._router.navigate(['/user/profile/timeslots'])

      });
  }


}



