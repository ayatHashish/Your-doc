import { Component } from '@angular/core';
import { DoctorsService } from '../../../share/services/doctors.service'
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../share/services/booking.service';
import { DataServiceService } from '../../../share/services/data-service.service';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.scss']
})

export class DoctorsDetailsComponent {
  id: any
  doctorDetails: any
  role: any = ""
  constructor(
    private _doctors: DoctorsService,
    private _ActivatedRoute: ActivatedRoute,
    private _booking: BookingService,
    private dataService: DataServiceService) {

    this.role = localStorage.getItem("user_role");
    this.doctorsDetails()
  }

  selectedDoctor(doctor_name: string, slot: any) {
    const obj = {
      doctor_name: doctor_name,
      slot_id: slot.id,
      slot_day: slot.day,
    }
    const doctorData = JSON.stringify(obj);
    localStorage.setItem('doctorData', doctorData);
  }

  doctorsDetails() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._doctors.getDoctorsDetails(this.id).subscribe((res) => {
      this.doctorDetails = res.data
    });
  }

}
