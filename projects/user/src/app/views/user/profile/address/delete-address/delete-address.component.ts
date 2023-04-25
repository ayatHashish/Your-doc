import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';
import { AddressComponent } from '../address.component';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.scss',
  '../../timeslots/delslots/delslots.component.scss'
]
})
export class DeleteAddressComponent {
  @Input() slotDleted: any;
  @Input() profileaddress :any
constructor (private _deleteAddress: AddressDoctorService, private _router: Router , private addressComponent: AddressComponent){

}
  deleteAddress(id: number) {
    this._deleteAddress.deleteAddress(id).subscribe(
      (res) => {
        this.addressComponent.alladdress();
      },
      (e) => console.error(e.error.error),

    );


  }


}
