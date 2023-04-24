import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss','./../details/details.component.scss']
})
export class AddressComponent {
  @Input() profileaddress: any;
}
