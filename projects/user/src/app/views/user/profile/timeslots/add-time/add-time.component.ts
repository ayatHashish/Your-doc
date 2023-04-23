import { Component, Input, ViewChild } from '@angular/core';
import { TimeslotService } from 'projects/user/src/app/share/services/timeslot.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeslotsComponent } from '../timeslots.component';
import { format } from 'date-fns';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: [
    './add-time.component.scss',
    '../editslot/editslot.component.scss',
  ],
})
export class AddTimeComponent {
  @ViewChild('myModal') myModal: any;
  @Input() myData: any;
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
    this.addrees();
  }
  creatSlotForm = new FormGroup({
    address_id: new FormControl('', [Validators.required]),
    day_ar: new FormControl('', [Validators.required]),
    day_en: new FormControl('', [Validators.required]),
    start_time: new FormControl('', [Validators.required]),
    end_time: new FormControl('', [Validators.required]),
  });
  get address() {
    return this.creatSlotForm.get('address_id');
  }
  get day_en() {
    return this.creatSlotForm.get('day_en');
  }
  get day_ar() {
    return this.creatSlotForm.get('day_ar');
  }
  get startTime() {
    return this.creatSlotForm.get('start_time');
  }
  get endTime() {
    return this.creatSlotForm.get('end_time');
  }

  addrees() {
    this._addTime.getAddress().subscribe((res) => {
      this.addresses = res.data;
    });
  }
  createSlot() {
    this.creatSlotForm.patchValue({
      start_time: format(new Date(this.startTimeSelected), 'h:mm a'),
      end_time: format(new Date(this.endTimeSelected), 'h:mm a'),
    });

    this._addTime.addSlot(this.creatSlotForm.value).subscribe(
      (res) => {
        this.timeslotsComponent.allTime();
        this.myModal.hide();
      },
      (e) => {
        this.errorMsg = e.error.error;
      },
      () => {
        this._router.navigate(['/user/profile/timeslots']);
      }
    );
  }
}
