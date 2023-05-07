import { Component } from '@angular/core';
import { BookingService } from '../../../share/services/booking.service';
import { FormControl, FormGroup } from '@angular/forms';
import { TestService } from '../../../share/services/test.service';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from '../../../share/services/doctors.service';
import { DateFormatPipe } from '../../../share/pipe/date-format.pipe';
@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.scss','../../doctor/doctors-details/doctors-details.component.scss']
})
export class UserBookingComponent {
 id: any
  doctorDetails: any
  constructor(
    private _booking: BookingService ,
    private _test:TestService ,
    private dateFormatPipe: DateFormatPipe,
    private _doctors: DoctorsService,
     private _ActivatedRoute: ActivatedRoute)
     {this.doctorsDetails()}


  bookingForm: FormGroup = new FormGroup({
    booking_date: new FormControl(),
    patient_name: new FormControl(),
    age: new FormControl(),
    disease_dec: new FormControl(),
  });
  doctorsDetails() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._doctors.getDoctorsDetails(this.id).subscribe((res) => {
      this.doctorDetails = res.data


    });
  }
  bookingFunction(data:any) {

    // this.slot_id = this.slotedit.id
    //   this.address_id = this.slotedit.address_id
    this._booking.booking(data).subscribe(
     (res) => console.log('Booking created successfully!'),
     (e) => console.error('Error creating booking!')
      );
  }


  // formatDate(date: Date): string {
  //   return this.dateFormatPipe.transform(date, 'dd-MM-yyyy');
  // }
}
