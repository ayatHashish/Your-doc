import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {

 
  customOptions: OwlOptions = {
    loop: true,
    margin: 0,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    dots: false,
    navText: [
      "<i class='bx bx-left-arrow-circle' data-toggle='tooltip' title='previous'></i>",
      "<i class='bx bx-right-arrow-circle' data-toggle='tooltip' title='next'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

}
