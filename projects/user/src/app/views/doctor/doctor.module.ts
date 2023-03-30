import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';

@NgModule({
  declarations: [
    DoctorsDetailsComponent,
    DoctorsComponent,

  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ShareModule
  ]
  ,
  exports: [

    DoctorsDetailsComponent,
    DoctorsComponent]
})
export class DoctorModule { }
