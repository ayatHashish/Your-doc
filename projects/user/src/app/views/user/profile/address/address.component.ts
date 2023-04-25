import { Component, Input } from '@angular/core';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss','./../details/details.component.scss']
})
export class AddressComponent {
  @Input() profileaddress: any;
  addresses: any;
  selectedItemId: any;
  address : any
constructor( private _allAddress: AddressDoctorService){}

alladdress() {
  this._allAddress.getMyAddresses().subscribe((res) => {
    this._allAddress = res.data
  })
};

openModal(itemId: number) {
  this.selectedItemId = itemId;
}

}
