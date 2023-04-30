import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddressDoctorService } from 'projects/user/src/app/share/services/address-doctor.service';
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
  // ngOnInit(): void {
  //   this._addTime.getAddress().subscribe((res) => {
  //     this.addresses = res.data;
  //   });
  // }
  addNewAddress = new FormGroup({
    address: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
  });

  addNewAdress() {
     this._add.addNewAddress(this.addNewAddress.value).subscribe(
     (res) => {
        this.addressComponent.alladdress();
     },
     (e) => {
       this.errorMsg = e.error.error;
      },
      ()=> {
        this.location.go(this.location.path());
        window.location.reload();
      }
     );
  }


}




