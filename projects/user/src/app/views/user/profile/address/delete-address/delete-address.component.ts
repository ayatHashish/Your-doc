import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.scss',
  '../../timeslots/delslots/delslots.component.scss'
]
})
export class DeleteAddressComponent {
  // @Input() slotDleted: any;
  address_id : any
  @Input() profileaddress :any
constructor (private _deleteAddress: AddressDoctorService, private _router: Router ,){

}
  deleteAddress(id: number) {
    this._deleteAddress.deleteAddress(id).subscribe(
      (res) => {
        // this.address_id = res.data.address_id
        // this._router.navigate(['/address']);
      },
      (e) => console.error(e.error.error),

    );
    this._deleteAddress.getMyAddresses().subscribe((res)=>
    this.address_id = res.data.address_id
    );

  }


}
