import { Component, Input, Output } from '@angular/core';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.scss', './../details/details.component.scss',]
})

export class TimeslotsComponent {
  @Input() myData: any;
  selectedItemId: any;
  allSlots: any;

  constructor(private _addTime: TimeslotService) {
    this.allTime()
  }

  allTime() {
    this._addTime.getAllSlots().subscribe((res) => {
      this.allSlots = res.data
    });
  }

  openModal(itemId: number) {
    this.selectedItemId = itemId;
  }
}
