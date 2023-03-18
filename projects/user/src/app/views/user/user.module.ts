import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../../share/share.module';

import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SettingComponent } from './profile/setting/setting.component';
import { SecurityComponent } from './profile/security/security.component';
import { AddressComponent } from './profile/address/address.component';
import { BookingComponent } from './profile/booking/booking.component';





@NgModule({
  declarations: [
    ProfileComponent,
    AppointmentComponent,
    DoctorsComponent,
    SettingComponent,
    SecurityComponent,
    AddressComponent,
    BookingComponent,

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
    AppointmentComponent,
    AddressComponent,
    BookingComponent,
  ]
})
export class UserModule { }
