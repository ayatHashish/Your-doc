import { Component } from '@angular/core';
import { DoctorsService } from '../../../share/services/doctors.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  doctor: any
  constructor(private _doctors: DoctorsService, private _router: Router) {
    this.doctors()
  }

  doctors() {
    this._doctors.allDoctors().subscribe((res) => {
      this.doctor = res.data

    })
  };



}
