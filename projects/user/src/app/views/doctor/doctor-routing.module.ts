import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsDetailsComponent } from './doctors/doctors-details/doctors-details.component';
import { DoctorsComponent } from './doctors/doctors.component';

const routes: Routes = [


  { path: 'doctors', component: DoctorsComponent,
  children: [
     { path: 'doctorsdetails', component: DoctorsDetailsComponent },
  ],
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
