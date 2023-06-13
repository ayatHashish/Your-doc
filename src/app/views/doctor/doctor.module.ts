import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorsDetailsComponent } from './doctors-details/doctors-details.component';
import { ModelComponent } from './model/model.component';
import { SpatialistDostorsComponent } from './spatialist-dostors/spatialist-dostors.component';
import { AllSpecialistesComponent } from './all-specialistes/all-specialistes.component';
import { SearchResultsComponent } from './search-results/search-results.component';



@NgModule({
  declarations: [
    DoctorsDetailsComponent,
    DoctorsComponent,
    ModelComponent,
    AllSpecialistesComponent,
    SpatialistDostorsComponent,
    SearchResultsComponent,
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    ShareModule

  ]
  ,
  exports: [
    DoctorsDetailsComponent,
    DoctorsComponent ,
    SpatialistDostorsComponent,
    AllSpecialistesComponent,
    SearchResultsComponent,
  ]
})
export class DoctorModule { }
