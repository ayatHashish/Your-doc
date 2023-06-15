import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ModelComponent } from './model/model.component';
import { SpatialistDostorsComponent } from './spatialist-dostors/spatialist-dostors.component';
import { AllSpecialistesComponent } from './all-specialistes/all-specialistes.component';
import { SearchResultsComponent } from './search-results/search-results.component';



const routes: Routes = [
  { path: 'all', component: DoctorsComponent },
  { path: 'allspcialistes', component: AllSpecialistesComponent },
  { path: 'details/:id', component: DoctorsDetailsComponent },
  { path: 'spcialiset/:id', component: SpatialistDostorsComponent },
  { path: 'search/:query', component: SearchResultsComponent },
  // {
  //   path: 'searchresults?:doctor_name/:specialty_id',
  //   component: SearchResultsComponent
  // }

  { path: 'model', component: ModelComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
