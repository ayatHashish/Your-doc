import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-view-appoinment',
  templateUrl: './view-appoinment.component.html',
  styleUrls: ['./view-appoinment.component.scss']
})
export class ViewAppoinmentComponent {
  @Input() bookingDetails: any;
  role: any = ""

  constructor() { this.role = localStorage.getItem("user_role"); }
}
