import { Component, Input, ViewChild } from '@angular/core';
import { Location, Time } from '@angular/common';
import { TimeslotService } from 'src/app/share/services/timeslot.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  birthDate!: Date;
  maxDate = new Date();
  minDate = new Date();
  enabledDates!: Date[];


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
  creatSlotForm: FormGroup;

  constructor(private _addTime: TimeslotService, private timeslotsComponent: TimeslotsComponent, private location: Location) {
    this.creatSlotForm = new FormGroup({
      address_id: new FormControl('', [Validators.required]),
      day_ar: new FormControl('', [Validators.required]),
      day_en: new FormControl('', [Validators.required]),
      start_time: new FormControl('', [Validators.required]),
      end_time: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit(): void {
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
        this.location.go(this.location.path());
        window.location.reload();
      }
    );
  }
}
