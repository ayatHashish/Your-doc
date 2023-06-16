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
  datesByday: any
  selected: object = {}
  constructor(
    private _doctors: DoctorsService,
    private _ActivatedRoute: ActivatedRoute,
    private _booking: BookingService,
    private dataService: DataServiceService) {
    this.doctorsDetails()
  }
  selectedDoctor(doctor: any, slot: any) {
    this.selected = {
      docId: doctor.id,
      docName: doctor.name,
      slotId: slot.id
    }

    this.getDatesByday("Monday")
  }

  doctorsDetails() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._doctors.getDoctorsDetails(this.id).subscribe((res) => {
      this.doctorDetails = res.data
    });
  }
  getDatesByday(day_name: any) {
    const date = {
      day_name: day_name
    }
    this._booking.getDatesByday(date).subscribe((res) => {
      this.datesByday = res.data
    });
  }
}
