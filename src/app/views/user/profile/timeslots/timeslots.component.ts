import { Component, Input } from '@angular/core';
import { TimeslotService } from 'src/app/share/services/timeslot.service';

@Component({
  selector: 'app-timeslots',
  templateUrl: './timeslots.component.html',
  styleUrls: ['./timeslots.component.scss', './../details/details.component.scss',]
})

export class TimeslotsComponent {
  @Input() sharetimeslots: any;
  allSlots: any;
  selectedItemId: any;
  item: any;

  constructor(private _addTime: TimeslotService) { this.allTime() }

  allTime() {
    this._addTime.getMySlots().subscribe(
      (result) => { this.allSlots = result.data },
      (e) => { this.allSlots = e.data },
    );
  }

  openModal(itemId: number) {
    this.selectedItemId = itemId;
  }

  openUpdateModal(item: any, address_id: any) {
    this.item = item;
    this.item['address_id'] = address_id;
    // console.log(this.item);
  }


}
