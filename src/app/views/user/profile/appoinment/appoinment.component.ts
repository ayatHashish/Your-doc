import { Component, ChangeDetectorRef } from '@angular/core';
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
  role: any = ""
  bookingDetails: any;
  isAction = false;

  constructor(private _book: BookingService, private cdr: ChangeDetectorRef) {
    this.role = localStorage.getItem("user_role");
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

  getBookingDetails(itemId: number) {
    this._book.bookingDetails(itemId).subscribe(
      (res) => this.bookingDetails = res.data,
      (e) => console.log(e)
    )
  }

  acceptBooking(id: number) {
    this._book.acceptBooking(id).subscribe(
      (res) => this.isAction = true,
      (error) => console.error('Error cancelling booking:', error),
      () => window.location.reload()
    );
  }

  cancelBooking(id: number) {
    this._book.cancelBooking(id).subscribe(
      (res) => this.isAction = true,
      (error) => console.error('Error cancelling booking:', error),
      () => window.location.reload()
    );
  }


}
