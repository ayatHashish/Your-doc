import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';
import { TimeslotsComponent } from '../timeslots.component';

@Component({
  selector: 'app-delslots',
  templateUrl: './delslots.component.html',
  styleUrls: ['./delslots.component.scss', '../editslot/editslot.component.scss',]
})
export class DelslotsComponent {
  @Input() slotId: any;

  constructor(private _deleteSlots: TimeslotService, private timeslotsComponent: TimeslotsComponent) { }

  // @ViewChild('myModal') myModal: ElementRef;

  // closeModal() {
  //   this.myModal.nativeElement.modal('hide');
  // }


  deleteSlot(id: number) {
    this._deleteSlots.deleteslots(id).subscribe(
      () => this.timeslotsComponent.allTime(),
      (e) => console.error(e.error.error),
      ()=> {}
    );
  }



}
