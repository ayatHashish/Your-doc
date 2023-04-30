import { Component } from '@angular/core';
import { BookingService } from '../../../share/services/booking.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss', '../../doctor/doctors-details/doctors-details.component.scss']
})
export class BookingComponent {
  page: number = 1;
  constructor(private _booking: BookingService) {

  }
  bookingForm: FormGroup = new FormGroup({

    booking_date: new FormControl(null),
    patient_name: new FormControl(null),
    age: new FormControl(null),
    disease_dec: new FormControl(null),

  });

  bookingFunction() {
    this._booking.booking("data")
      .subscribe(
        data => console.log('Booking created successfully!', data),
        error => console.error('Error creating booking!', error)
      );
  }


}
