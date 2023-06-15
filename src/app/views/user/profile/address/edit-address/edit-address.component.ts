import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressDoctorService } from 'src/app/share/services/address-doctor.service';
import { Location } from '@angular/common';
import { delay } from 'rxjs/operators';
import { timer } from 'rxjs';
@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.scss']
})
export class EditAddressComponent {
  @Input() addressedit!:
    {
      itemId: number,
      itemAddress: any,
      itemState: any,
      itemCountry: any
    };
  updateDataJson: any = { address_id: '' };
  constructor(private _update: AddressDoctorService ,private location: Location) { }
  onchangeInput(e: any) {
    e.stopPropagation();
    this.updateDataJson[`${e.target.name}`] = e.target.value;
  }
  updateAddressForm: FormGroup = new FormGroup({
    address_id: new FormControl(),
    address: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    country: new FormControl(null, [Validators.required])
  });
  get address() { return this.updateAddressForm.get('address') }
  get state() { return this.updateAddressForm.get('state') }
  get country() { return this.updateAddressForm.get('country') }

  updateAddress() {
    if (this.updateAddressForm.valid) {
      this.updateDataJson.address_id = this.addressedit.itemId;
      this._update.updateAddress(this.updateDataJson).subscribe(() => {
        console.log('Address updated successfully');

        this.reloadPage();
      });
    } else if (this.updateAddressForm.dirty) {
      this.updateDataJson.address_id = this.addressedit.itemId;
      this._update.updateAddress(this.updateDataJson).subscribe(() => {
        console.log('Address updated successfully');
        this.reloadPage();
      });
    } else {
      console.log('Form not valid');
    }

  }
  reloadPage() {
    // Add a delay of 500ms before reloading the page
    timer(100).subscribe(() => {
      this.location.go(this.location.path());
      window.location.reload();
    });
  }
}
