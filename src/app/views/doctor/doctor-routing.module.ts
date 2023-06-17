import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DoctorsComponent } from './doctors/doctors.component';

import { SpatialistDostorsComponent } from './spatialist-dostors/spatialist-dostors.component';
import { AllSpecialistesComponent } from './all-specialistes/all-specialistes.component';
import { SearchResultsComponent } from '../page/search-results/search-results.component';

const routes: Routes = [
  { path: 'all', component: DoctorsComponent },
  { path: 'allspcialistes', component: AllSpecialistesComponent },
  { path: 'details/:id', component: DoctorsDetailsComponent },
  { path: 'spcialiset/:id', component: SpatialistDostorsComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
