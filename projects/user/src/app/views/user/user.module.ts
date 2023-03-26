import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../../share/share.module';

import { ProfileComponent } from './profile/profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SettingComponent } from './profile/setting/setting.component';
import { SecurityComponent } from './profile/security/security.component';
import { AddressComponent } from './profile/address/address.component';
import { BookingComponent } from './profile/booking/booking.component';
import { DetailsComponent } from './profile/details/details.component';
import { BredbunnerComponent } from './bredbunner/bredbunner.component';





@NgModule({
  declarations: [
    ProfileComponent,
    DoctorsComponent,
    SettingComponent,
    SecurityComponent,
    AddressComponent,
    BookingComponent,
    DetailsComponent,
    BredbunnerComponent

  ],
  imports: [
    ShareModule,
    CommonModule,
    UserRoutingModule,
  ],
  exports: [
    DoctorsComponent,
    ProfileComponent,
    SettingComponent,
    SecurityComponent,

    AddressComponent,
    BookingComponent,
    DetailsComponent,
    BredbunnerComponent


  ]
})
export class UserModule { }
