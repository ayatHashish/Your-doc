import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';

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

  constructor(private _update: AddressDoctorService) { }

  onchangeInput(e: any) {
    e.stopPropagation();
    this.updateDataJson[`${e.target.name}`] = e.target.value;
    // console.log(this.updateDataJson);
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
      this.updateDataJson.address_id = this.addressedit.itemId
      this._update.updateAddress(this.updateDataJson)
        .subscribe(() => console.log('address updated successfully'));
    }
  }
}
