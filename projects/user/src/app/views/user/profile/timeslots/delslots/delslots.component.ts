import { Component, ElementRef, Input, Output, ViewChild } from '@angular/core';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';
import { TimeslotsComponent } from '../timeslots.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delslots',
  templateUrl: './delslots.component.html',
  styleUrls: ['./delslots.component.scss', '../editslot/editslot.component.scss',]
})
export class DelslotsComponent {
  @ViewChild('myModal') myModal: any;
  @Input() slotId: any;
  // @Input() isVisible = false;
  constructor(private _deleteSlots: TimeslotService, private timeslotsComponent: TimeslotsComponent, private _router: Router) { }

  // @ViewChild('myModal') myModal: ElementRef;

  // closeModal() {
  //   this.myModal.nativeElement.modal('hide');
  // }

  deleteSlot(id: number) {
    this._deleteSlots.deleteslots(id).subscribe(
      () => {
        // this.isVisible = true;
        this.myModal.hide();
        this._router.navigate(['/timeslots']);
      },
      (e) => console.error(e.error.error),
      () => { this.timeslotsComponent.allTime(); }
    );
  }
  // onDependentInputChange(){

  // }
  // onDependentInputChangeUser(){
  //   this.isVisible = false;
  // }


}
