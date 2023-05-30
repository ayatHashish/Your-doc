import { Component, Input, ViewChild } from '@angular/core';
import { BookingService } from '../../../share/services/booking.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../../../share/services/doctors.service';
import { DoctorsDetailsComponent } from '../../doctor/doctors-details/doctors-details.component';
import { DataServiceService } from '../../../share/services/data-service.service';

@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss', '../../doctor/doctors-details/doctors-details.component.scss']
})
export class UserBookingComponent {
  id: any
  @Input() slotId: any
  doctorDetails: any
  data: any;

  constructor(
    private _booking: BookingService,
    private _doctors: DoctorsService,
    private _ActivatedRoute: ActivatedRoute,
    private _dataService: DataServiceService) {
    this.doctorsDetails()
    this._dataService.selected.subscribe(data => this.data = data);
  }

  bookingForm: FormGroup = new FormGroup({
    doctor_id: new FormControl(''),
    slot_id: new FormControl(''),
    booking_date: new FormControl(''),
    patient_name: new FormControl(''),
    age: new FormControl(''),
    disease_dec: new FormControl(''),
  });
  doctorsDetails() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._doctors.getDoctorsDetails(this.id).subscribe((res) => {
      this.doctorDetails = res.data
    });
  }
  bookingFunction() {
    if (this.bookingForm.valid) {
      this.bookingForm.patchValue({
        doctor_id: this.data.id,
        slot_id: this.data.slotId,
      })

      this._booking.booking(this.bookingForm.value).subscribe(
        (res) => {
          console.log('Booking created successfully!')
        },
        (e) => console.error('Error creating booking!')
      );
    }

  }
}
