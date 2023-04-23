import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BookingService } from 'projects/user/src/app/share/services/booking.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: [
    './appoinment.component.scss',
    './../details/details.component.scss',
  ],
})
export class AppoinmentComponent {
  appoinments: any[] = [];
  currentPage = 1;
  totalPages: number = 10;
  role:any = ""
  cansled: string = '';
  accept: string = '';
  showIcon: boolean = true;

  // pageSize = Array.from({ length: this.totalPages }, (_, index) => index);

  constructor(private _book: BookingService) {
    this.role= localStorage.getItem("user_role");
    this.getAppoinment(this.currentPage);
    // console.log(this.pageSize);
  }

  getAppoinment(page: number) {
    this._book.getMyAppointment(page).subscribe((res) => {
      this.appoinments = res.data;
      this.totalPages = res.count_pages;
    });
  }

  nextPage(): void {
    this.currentPage++;
    this.getAppoinment(this.currentPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getAppoinment(this.currentPage);
    }
  }

toggleIcon() {

}

toggleAccept() {
  this.showIcon = !this.showIcon;
  this.accept = this.showIcon ? '' : 'Accepted';
}

cancel(id: number) {
  this._book.cancelBooking(id).subscribe(
    (res) => {

    },
    (e) => console.error(e.error.error) ,
    ()=> {
      
       this.showIcon = !this.showIcon;
       this.cansled = this.showIcon ? '' : 'Canseled';
    }



    )

}
// getAppoinment(page: number) {
//   this._book.getMyAppointment(page).subscribe((res) => {
//     this.appoinments = res.data;
//     this.totalPages = res.count_pages;
//   });
// }
// (click)="deleteSlot(slotId)"

}
