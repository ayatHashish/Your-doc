import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';
import { TimeslotsComponent } from '../timeslots.component';

@Component({
  selector: 'app-editslot',
  templateUrl: './editslot.component.html',
  styleUrls: ['./editslot.component.scss'],
})
export class EditslotComponent {
  addresses: [] = [];
  errorMsg = '';
  allowArrowKeys = true;
  startTimeSelected = new Date();
  endTimeSelected = new Date();
  daysEN = [
    'Saturday',
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
  ];
  daysAR = [
    'السبت',
    'الأحد',
    'الأثنين',
    'الثلاثاء',
    'الأربعاء',
    'الخميس',
    'الجمعه',
  ];

  constructor(
    private _addTime: TimeslotService,
    private _router: Router,
    private timeslotsComponent: TimeslotsComponent
  ) {}

  ngOnInit(): void {
    this._addTime.getAddress().subscribe((res) => {
      this.addresses = res.data;
    });
  }
}
