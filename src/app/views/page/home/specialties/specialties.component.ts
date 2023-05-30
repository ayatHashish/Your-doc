import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/share/services/doctors.service';
@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss'],
})
export class SpecialtiesComponent {

  id :any
  spacialistes: any

  constructor( private _spacialist: DoctorsService ,private _ActivatedRoute: ActivatedRoute) {this.spacialist()}
  customOptions: OwlOptions = {
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: true,
    dots: false,
    navText: [
      "<i class='bx bx-chevron-left' data-toggle='tooltip' title='previous'></i>",
      "<i class='bx bx-chevron-right' data-toggle='tooltip' title='next'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  };
  spacialist(){
    // this.id = this._ActivatedRoute.snapshot.params['id'];
    this._spacialist.allSpatialists().subscribe((res) => {
    this.spacialistes = res.data
  })}



}
