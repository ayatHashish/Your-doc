import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressDoctorService } from 'src/app/share/services/address-doctor.service';
import { AddressComponent } from '../address.component';
AddressComponent
@Component({
  selector: 'app-add-new-address',
  templateUrl: './add-new-address.component.html',
  styleUrls: ['./add-new-address.component.scss']
})
export class AddNewAddressComponent {
  // @ViewChild('myModal') myModal: any;
  @Input() myData: any;
  errorMsg = '';
  constructor(private _add :AddressDoctorService,

      private addressComponent: AddressComponent ,
      private location: Location) {}
  addNewAddress = new FormGroup({
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  get address() { return this.addNewAddress.get('address') }
  get state() { return this.addNewAddress.get('state') }
  get country() { return this.addNewAddress.get('country') }

  addNewAdress() {
     this._add.addNewAddress(this.addNewAddress.value).subscribe(
     (res) => {
        this.addressComponent.alladdress();
     },
     (e) => {
       this.errorMsg = e.error.error;
       console.log(this.errorMsg );

      },
      ()=> {
        this.location.go(this.location.path());
        window.location.reload();
      }
     );
  }
}




