import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
@Component({
  selector: 'app-specialties',
  templateUrl: './specialties.component.html',
  styleUrls: ['./specialties.component.scss']
})
export class SpecialtiesComponent {
  customOptions: OwlOptions = {
    loop: true,
    margin:15,
    autoplay: true,
    autoplayTimeout: 7000,
    nav: true,
    dots:false,
    navText: [
        "<span style='display:none'></span><i class='bx bx-left-arrow-circle'data-toggle='tooltip' title='previous'></i>",
        "<span style='display:none'></span><i class='bx bx-right-arrow-circle'data-toggle='tooltip' title='next'></i> ",],
    responsive: {
        0: {
            items: 2,
        },
        600: {
            items: 2,
        },
        1000: {
            items:4,
        },
    },
  }
}
