import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsComponent } from './terms/terms.component';
import { AllSpecialistesComponent } from './all-specialistes/all-specialistes.component';
import { DoctorPrivacyPolicyComponent } from './doctor-privacy-policy/doctor-privacy-policy.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { MedicalqustionComponent } from './medicalqustion/medicalqustion.component';

const routes: Routes = [
  { path: 'terms', component: TermsComponent },
  { path: 'allspcialistes', component: AllSpecialistesComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'privacyPolicy', component: DoctorPrivacyPolicyComponent },
  { path: 'medicalqustion', component: MedicalqustionComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommanRoutingModule { }
