import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppointmentComponent } from './appointment/appointment.component';
import { DoctorsComponent } from "./doctors/doctors.component";
import { ProfileComponent } from '../user/profile/profile.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [

  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
