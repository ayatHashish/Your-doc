import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';
import { TimeslotsComponent } from '../timeslots.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editslot',
  templateUrl: './editslot.component.html',
  styleUrls: ['./editslot.component.scss'],
})
export class EditslotComponent {
 @Input() slotedit!: { itemId: number, itemdayAr: any, itemdayEn: any, itemstartTime: any , itemendTime :any};
  constructor(  private _addTime: TimeslotService) {}

  editSlotForm = new FormGroup({
    slot_id: new FormControl(),
    address_id: new FormControl(),
    day_ar: new FormControl(),
    day_en: new FormControl(),
    start_time: new FormControl(),
    end_time: new FormControl(),
  });


  editSlot(){
      this.editSlotForm.patchValue({
        address_id: this.slotedit.itemId
      });
      this._addTime.updateSlots(this.editSlotForm.value)
        .subscribe(() => console.log('address updated successfully'));
  }

}
