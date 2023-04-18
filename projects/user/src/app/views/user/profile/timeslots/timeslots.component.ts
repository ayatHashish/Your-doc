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
  // modvisible: boolean = false;
  allSlots: any;
  // @Input() isVisible: any;

  constructor(private _addTime: TimeslotService) {
    this.allTime()
  // console.log(this.isVisible);

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

