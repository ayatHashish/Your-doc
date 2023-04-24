import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ModelComponent } from './model/model.component';
import { SpatialistDostorsComponent } from './spatialist-dostors/spatialist-dostors.component';



const routes: Routes = [
  { path: 'doctors', component: DoctorsComponent },
  { path: 'details/:id', component: DoctorsDetailsComponent },
  { path: 'spcialisets/:id', component: SpatialistDostorsComponent },
  { path: 'model', component: ModelComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
