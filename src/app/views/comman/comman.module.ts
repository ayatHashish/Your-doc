import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommanRoutingModule } from './comman-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { MedicalqustionComponent } from './medicalqustion/medicalqustion.component';
import { DoctorPrivacyPolicyComponent } from './doctor-privacy-policy/doctor-privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    MedicalqustionComponent,
    DoctorPrivacyPolicyComponent,
    TermsComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    CommanRoutingModule
  ],
  exports: [
    AboutUsComponent,
    MedicalqustionComponent,
    DoctorPrivacyPolicyComponent,
    ContactUsComponent,
    TermsComponent
  ]
})
export class CommanModule { }
