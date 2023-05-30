import { Component } from '@angular/core';
import { BookingService } from '../../../share/services/booking.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spatialist-dostors',
  templateUrl: './spatialist-dostors.component.html',
  styleUrls: ['./spatialist-dostors.component.scss','../doctors/doctors.component.scss']
})
export class SpatialistDostorsComponent {
  id: any
  doctors: any
  page: number = 1;
  constructor(private _doctors: BookingService, private _ActivatedRoute: ActivatedRoute) {
    this.spacialist()
  }

  spacialist() {
    this.id = this._ActivatedRoute.snapshot.params['id'];
    this._doctors.allSpatialistsDostors(this.id, this.page).subscribe((res) => {
      this.doctors = res.data
    })
  }
}
