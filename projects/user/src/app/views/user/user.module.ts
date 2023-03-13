import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../../share/share.module';

import { AppointmentComponent } from './appointment/appointment.component';
import { ProfileComponent } from './profile/profile.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    ProfileComponent,
    AppointmentComponent,
    AboutComponent,
    DoctorsComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    UserRoutingModule,
  ],
  exports: [

    AboutComponent,
    DoctorsComponent
  ]
})
export class UserModule { }
