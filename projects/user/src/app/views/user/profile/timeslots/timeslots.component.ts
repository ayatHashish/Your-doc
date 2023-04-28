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


  itemId: any;
  itemdayAr: any;
  itemdayEn: any;
  itemstartTime: any;
  itemendTime: any;
  item = { id: 1, address: '' };

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
  openUpdateModal(itemId: any, dayAr: any, startTime: any, endTime: any,  dayEn: any) {
    this.item.id = itemId;
    this.itemId = itemId;
    this.itemdayAr = dayAr;
    this.itemdayEn = dayEn;
    this.itemstartTime = startTime;
    this.itemendTime = endTime;
  }
  getSlotEdit() {
    return { itemId: this.itemId, itemdayAr: this.itemdayAr,  itemdayEn: this.itemdayEn, itemstartTime: this.itemstartTime, itemendTime: this.itemendTime };
  }


}
