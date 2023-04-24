import { Component } from '@angular/core';
import { DoctorsService } from '../../../share/services/doctors.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-doctors-details',
  templateUrl: './doctors-details.component.html',
  styleUrls: ['./doctors-details.component.scss']
})
export class DoctorsDetailsComponent {
  id: any
  doctorDetails: any

  constructor(private _doctors: DoctorsService, private _ActivatedRoute: ActivatedRoute)
  {
    this.doctorsDetails()
  }

  doctorsDetails() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._doctors.getDoctorsDetails(this.id).subscribe((res) => {
      this.doctorDetails = res.data
      console.log(this.doctorDetails);

    });
  }
}
