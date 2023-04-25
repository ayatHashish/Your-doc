import { Component } from '@angular/core';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent {
address :any
constructor(private _update :AddressDoctorService){}


  // updateAddress(): void {
  //   this._update.updateAddress(this.address)

  //     .subscribe(() => console.log('address updated successfully'));
  // }
}
