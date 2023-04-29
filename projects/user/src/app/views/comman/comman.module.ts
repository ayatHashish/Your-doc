import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommanRoutingModule } from './comman-routing.module';
import { AllSpecialistesComponent } from './all-specialistes/all-specialistes.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MedicalqustionComponent } from './medicalqustion/medicalqustion.component';
import { DoctorPrivacyPolicyComponent } from './doctor-privacy-policy/doctor-privacy-policy.component';
import { TermsComponent } from './terms/terms.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    MedicalqustionComponent,
    DoctorPrivacyPolicyComponent,
    AllSpecialistesComponent,
    TermsComponent
  ],
  imports: [
    CommonModule,
    CommanRoutingModule
  ],
  exports: [
    AboutUsComponent,
    MedicalqustionComponent,
    DoctorPrivacyPolicyComponent,
    AllSpecialistesComponent,
    TermsComponent
  ]
})
export class CommanModule { }
