import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ModelComponent } from './model/model.component';
import { TimeslotComponent } from './timeslot/timeslot.component';
import { AllTimeComponent } from './timeslot/all-time/all-time.component';
import { EditslotComponent } from './timeslot/editslot/editslot.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  { path: 'details', component: DoctorsDetailsComponent },
  { path: 'model', component: ModelComponent },
  { path: 'timeSlots', component: TimeslotComponent },
  { path: 'AllSlots', component: AllTimeComponent },
  { path: 'editslot', component: EditslotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
