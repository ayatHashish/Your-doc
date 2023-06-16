import { Component, Input, ViewChild } from '@angular/core';
import { BookingService } from '../../../share/services/booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss', '../../doctor/doctors-details/doctors-details.component.scss']
})
export class UserBookingComponent {
  isSubmitted = false;
  errorMsg = '';
  doctorDataParsed: any;
  datesByday = []
  // DatePicker
  minDate = new Date();
  maxDate = new Date();
  enabledDates: Date[] = [];

  constructor(private _booking: BookingService, private _route: ActivatedRoute, private _router: Router) {
    // Get doctorData from localStorage and parse it to obj
    const doctorData = localStorage.getItem('doctorData');
    if (doctorData) { this.doctorDataParsed = JSON.parse(doctorData); }
    // Make max date after 2 month from now
    this.maxDate.setMonth(this.maxDate.getMonth() + 2);
    // Get enabled Dates using slot day name
    this.getDatesByday(this.doctorDataParsed.slot_day)
  }

  getDatesByday(day_name: any) {
    const data = { day_name: day_name }
    this._booking.getDatesByday(data).subscribe((res) => {
      this.datesByday = res.dates
      // push res into enabledDates
      const dates = this.datesByday.map(dateString => new Date(dateString));
      this.enabledDates = dates;
    });
  }

  bookingForm: FormGroup = new FormGroup({
    doctor_id: new FormControl(''),
    slot_id: new FormControl(''),
    booking_date: new FormControl('', [Validators.required,]),
    patient_name: new FormControl('', [Validators.required,]),
    age: new FormControl('', [Validators.required,]),
    disease_dec: new FormControl('', [Validators.required,]),
  });

  get date() { return this.bookingForm.get("booking_date") }
  get patient() { return this.bookingForm.get("patient_name") }
  get age() { return this.bookingForm.get("age") }
  get disease_dec() { return this.bookingForm.get("disease_dec") }

  bookingFunction() {
    this.isSubmitted = true;
    if (this.bookingForm.valid) {
      this.bookingForm.patchValue({
        doctor_id: this._route.snapshot.params['id'] / 100,
        slot_id: this.doctorDataParsed.slot_id,
      });

      this._booking.booking(this.bookingForm.value).subscribe(
        (res) => console.log(res),
        (e) => this.errorMsg = e.error.error,
        () => this._router.navigateByUrl('user/profile/appointments'),
      );
    }
  }
}
