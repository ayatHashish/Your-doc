import { Component, Input } from '@angular/core';
import { TimeslotService } from 'src/app/share/services/timeslot.service';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.scss', './../details/details.component.scss',]
})

export class TimeslotsComponent {
  @Input() sharetimeslots: any;
  selectedItemId: any;
  item: any;
  allClinics: any;

  constructor(private _timeSlots: TimeslotService) {
    this._timeSlots.getMySlots().subscribe((res) => {
      this.allClinics = res.data;
    });
  }

  allTime() { }

  openModal(itemId: number) {
    this.selectedItemId = itemId;
  }

  openUpdateModal(item: any, address_id: any) {
    this.item = item;
    this.item['address_id'] = address_id;
    // console.log(this.item);
  }

}
