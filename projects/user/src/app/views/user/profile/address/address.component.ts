import { Component, Input } from '@angular/core';
import { AnyObject } from 'chart.js/types/basic';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss', './../details/details.component.scss']
})
export class AddressComponent {
  @Input() profileaddress: any;
  addresses: any;
  selectedItemId: any;
  itemId: any;
  itemAddress: any;
  itemState: any;
  itemCountry: any;
  item = { id: 1, address: '' };
  // address: any
  constructor(private _allAddress: AddressDoctorService) { }

  alladdress() {
    this._allAddress.getMyAddresses().subscribe((res) => {
      this._allAddress = res.data
    })
  };

  openModal(itemId: any) {
    this.selectedItemId = itemId;
  }
  openUpdateModal(itemId: any, address: any, state: any, country: any) {
    this.item.id = itemId;
    this.itemId = itemId;
    this.itemAddress = address;
    this.itemState = state;
    this.itemCountry = country;
  }
  getAddressEdit() {
    return {
      itemId: this.itemId,
       itemAddress: this.itemAddress,
        itemState: this.itemState,
        itemCountry: this.itemCountry };
  }

}
