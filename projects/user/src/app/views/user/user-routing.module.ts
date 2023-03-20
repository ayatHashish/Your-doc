import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorsComponent } from "./doctors/doctors.component";
import { ProfileComponent } from '../user/profile/profile.component';
import { AddressComponent } from './profile/address/address.component';

import { SecurityComponent } from './profile/security/security.component';
import { SettingComponent } from './profile/setting/setting.component';
import { BookingComponent } from './profile/booking/booking.component';
import { DetailsComponent } from './profile/details/details.component';
const routes: Routes = [

  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'appointment', component: AppointmentComponent },
  {path: 'profile',component: ProfileComponent,
    children: [
      { path: 'address', component: AddressComponent },
      { path: 'book', component: BookingComponent},
      { path: 'security', component: SecurityComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
