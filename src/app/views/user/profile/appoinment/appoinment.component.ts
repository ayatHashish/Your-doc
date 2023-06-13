import { Component } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BookingService } from 'src/app/share/services/booking.service';

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
  showIcon = true;
  cancelText = 'Cancel';

  isCanceled: boolean = false;

  constructor(private _book: BookingService) {
    this.role= localStorage.getItem("user_role");
    this.getAppoinment(this.currentPage);
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
 acceptBookings(id: number) {
  this._book.acceptBooking(id).subscribe(
    (res) => {
         console.log('Booking cancelled successfully.');
    },
    error => {
      console.error('Error cancelling booking:', error);
    },
    () => {

    }
  );
}

cancel(e: Event,id: number) {
  e.preventDefault();
  const target = e.target as HTMLElement;
  target.innerText = 'Canceling';
  this._book.cancelBooking(id).subscribe(
    (res) => {
        //  this.isCanceled= true
    },
  );
}


}