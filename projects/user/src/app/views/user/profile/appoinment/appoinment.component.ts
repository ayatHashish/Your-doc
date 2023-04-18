import { Component,OnInit  } from '@angular/core';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BookingService } from 'projects/user/src/app/share/services/booking.service';

@Component({
  selector: 'app-appoinment',
  templateUrl: './appoinment.component.html',
  styleUrls: ['./appoinment.component.scss', './../details/details.component.scss'],
})
export class AppoinmentComponent {
  appoinments: any[] = []; // your data
  page = 1; // current page number
  pageSize = 10; // number of items to display per page
  pageCount: any; // total number of pages
  visibleData: any[] = []; // data to display on the current page
  // column names to display in the table
  displayedColumns: string[] = ['column1', 'column2',];
  constructor( private _book: BookingService) {

    // this.paginat.boundaryLinks = true;
    // this.paginat.maxSize = 5;
    this.getAppoinment()
  }

  ngOnInit() {

    this.getAppoinment()
    // set the total page count
    this.pageCount = Math.ceil(this.appoinments.length / this.pageSize);
    // set the data to display on the first page
    this.visibleData = this.appoinments.slice(0, this.pageSize);
  }
getAppoinment() {
    this._book.getMyAppointment().subscribe((res) => {
      this.appoinments = res.data

    });
  }
  onPageChanged(event: any) {
    // calculate the starting index and ending index of the data to display on the current page
    const startIndex = (event.page - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize, this.appoinments.length);
    // set the data to display on the current page
    this.visibleData = this.appoinments.slice(startIndex, endIndex);
  }
}

