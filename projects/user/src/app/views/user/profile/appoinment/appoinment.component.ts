import { Component, OnInit } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BookingService } from 'projects/user/src/app/share/services/booking.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.scss', './../details/details.component.scss'],
})

export class AppoinmentComponent {
  appoinments: any[] = [];
  rowsCount: number = 0;
  counter = 1;

  constructor(private _book: BookingService,) {
    this.getAppoinment(this.counter)
    console.log(this.counter);

  }

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.getAppoinment(this.counter ++)
    console.log(this.counter);
  }

  getAppoinment(ali:number) {
    this._book.getMyAppointment(ali).subscribe((res) => {
      this.appoinments = res.data;
      this.rowsCount = res.rows_count
      //10 / 10 = 1 + 10 = 11 currnt + 1

    });
  }

}

