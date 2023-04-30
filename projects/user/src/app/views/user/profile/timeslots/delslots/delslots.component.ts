import { Component, Input, ViewChild } from '@angular/core';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-delslots',
  templateUrl: './delslots.component.html',
  styleUrls: ['./delslots.component.scss', '../editslot/editslot.component.scss',]
})
export class DelslotsComponent {
  @ViewChild('myModal') myModal: any;
  @Input() slotId: any;
  constructor(private _deleteSlots: TimeslotService,
      private _router: Router ,
    private location: Location)
    { }
  deleteSlot(id: number) {
    this._deleteSlots.deleteslots(id).subscribe(
      () => {
        this.myModal.hide();
        this._router.navigate(['/timeslots']);
      },
      (e) => console.error(e.error.error),
      ()=> {
          this.location.go(this.location.path());
          window.location.reload();
        }

    );
  }


}
