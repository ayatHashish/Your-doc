import { Component } from '@angular/core';
import { BookingService } from '../../../share/services/booking.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss','../../doctor/doctors-details/doctors-details.component.scss']
})
export class UserBookingComponent {

  constructor(private _booking: BookingService) {}


  bookingForm: FormGroup = new FormGroup({

    booking_date: new FormControl(),
    patient_name: new FormControl(),
    age: new FormControl(),
    disease_dec: new FormControl(),

  });

  bookingFunction(data:any) {

    // this.slot_id = this.slotedit.id
    //   this.address_id = this.slotedit.address_id
    this._booking.booking(data).subscribe(
     (res) => console.log('Booking created successfully!'),
     (e) => console.error('Error creating booking!')
      );
  }
}
