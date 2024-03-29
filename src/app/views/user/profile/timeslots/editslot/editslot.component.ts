import { Component, Input } from '@angular/core';
import { TimeslotService } from 'src/app/share/services/timeslot.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { timer } from 'rxjs';

@Component({
  selector: 'app-editslot',
  templateUrl: './editslot.component.html',
  styleUrls: ['./editslot.component.scss'],
})
export class EditslotComponent {

  @Input() slotedit: any;
  startTimeSelected = new Date();
  endTimeSelected = new Date();
  allowArrowKeys = true;
  updateDataJson: any = { slot_id: '', address_id: '' };
  daysEN = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
  daysAR = ['السبت', 'الأحد', 'الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه'];
  errorMsg: any
  constructor(
    private _addTime: TimeslotService ,
    private location: Location) { }

  editSlotForm = new FormGroup({
    slot_id: new FormControl(),
    address_id: new FormControl(),
    day_ar: new FormControl(),
    day_en: new FormControl(),
    start_time: new FormControl(),
    end_time: new FormControl(),
  });

  get day_ar() { return this.editSlotForm.get('day_ar') }
  get day_en() { return this.editSlotForm.get('day_en') }
  get start_time() { return this.editSlotForm.get('start_time') }
  get end_time() { return this.editSlotForm.get('end_time') }

  onchangeInput(e: any) {
    e.stopPropagation();
    this.updateDataJson[`${e.target.name}`] = e.target.value;

  }
  editSlot() {
    if (this.editSlotForm.valid) {
      // this.updateDataJson.address_id = this.address_id
      this.updateDataJson.slot_id = this.slotedit.id
      this._addTime.updateSlots(this.updateDataJson).subscribe(() => {
        console.log('Address updated successfully');
        // this.reloadPage();
      });
    } else if (this.editSlotForm.dirty) {
      this.updateDataJson.slot_id = this.slotedit.id
      this._addTime.updateSlots(this.updateDataJson).subscribe(() => {
        console.log('Address updated successfully');
        // this.reloadPage();
      });
    } else {
      console.log('Form not valid');
    }

  }
  // reloadPage() {
  //   // Add a delay of 500ms before reloading the page
  //   timer(100).subscribe(() => {
  //     this.location.go(this.location.path());
  //     window.location.reload();
  //   });
  // }

// editSot() {
  //   if (this.editSlotForm.valid) {
  //     this.updateDataJson.slot_id = this.slotedit.id
  //     this.updateDataJson.address_id = this.slotedit.address_id
  //     console.log(this.updateDataJson);

  //     this._addTime.updateSlots(this.updateDataJson.value)
  //       .subscribe(
  //         (res) => {
  //           console.log('address updated successfully');
  //         },
  //         (e) => {
  //           this.errorMsg = e.error.error;
  //         },
  //         ()=> {
  //           this.location.go(this.location.path());
  //           window.location.reload();
  //         }
  //       );
  //   }
  // }
}
