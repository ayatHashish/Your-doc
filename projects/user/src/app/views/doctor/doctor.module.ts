import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { ModelComponent } from './model/model.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { AllTimeComponent } from './timeslot/all-time/all-time.component';
import { EditslotComponent } from './timeslot/editslot/editslot.component';

@NgModule({
  declarations: [
    DoctorsDetailsComponent,
    DoctorsComponent,
    ModelComponent,
    TimeslotComponent,
    AllTimeComponent,
    EditslotComponent,

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
