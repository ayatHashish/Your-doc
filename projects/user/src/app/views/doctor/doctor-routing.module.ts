import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SpecialtiesComponent } from '../page/home/specialties/specialties.component';

const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  { path: 'details', component: DoctorsDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
