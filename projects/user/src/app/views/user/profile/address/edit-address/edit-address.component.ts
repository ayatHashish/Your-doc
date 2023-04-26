import { Component, Inject, Input } from '@angular/core';
import { inject } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TimeScale } from 'chart.js';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';

@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent {
  @Input() addressedit!: { itemId: number, itemAddress: string, itemState: string, itemCountry: string };

  constructor(private _update: AddressDoctorService) {}

  updateAddressForm = new FormGroup({
    address_id: new FormControl(),
    address: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
  });

  updateAddress() {
    this.updateAddressForm.patchValue({
      address_id: this.addressedit.itemId
    });
    this._update.updateAddress(this.updateAddressForm.value)
      .subscribe(() => console.log('address updated successfully'));
  }
}
