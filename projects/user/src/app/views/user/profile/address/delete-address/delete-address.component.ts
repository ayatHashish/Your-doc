import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';
import { AddressComponent } from '../address.component';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: [
    './delete-address.component.scss',
    '../../timeslots/delslots/delslots.component.scss',
  ],
})
export class DeleteAddressComponent {
  @Input() addressDleted: any;
  @Input() profileaddress: any;
  constructor(
    private _deleteAddress: AddressDoctorService,
    private addressComponent: AddressComponent ,
    private location: Location
  ) {}

  deleteAddress(id: number) {
    this._deleteAddress.deleteAddress(id).subscribe(
      (res) => {
        this.addressComponent.alladdress();
      },
      (e) => {console.error(e.error.error) ;},
      ()=> {
        this.location.go(this.location.path());
        window.location.reload();
      }

    );
  }
}
