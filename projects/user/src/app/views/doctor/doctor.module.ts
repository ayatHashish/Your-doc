import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsDetailsComponent } from './doctors/doctors-details/doctors-details.component';


@NgModule({
  declarations: [
    DoctorsDetailsComponent,
    DoctorsComponent],
  imports: [
    CommonModule,
    DoctorRoutingModule
  ]
,
  exports: [
    
    DoctorsDetailsComponent,
    DoctorsComponent]
})
export class DoctorModule { }
