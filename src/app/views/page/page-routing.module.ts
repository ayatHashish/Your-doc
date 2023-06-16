import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { SpecialtiesComponent } from './home/specialties/specialties.component';
import { TermsComponent } from './terms/terms.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DoctorPrivacyPolicyComponent } from './doctor-privacy-policy/doctor-privacy-policy.component';
import { MedicalqustionComponent } from './medicalqustion/medicalqustion.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'banner', component: BannerComponent },
      { path: 'specialties', component: SpecialtiesComponent },]

  },
  { path: 'terms-of-use', component: TermsComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'medical-questions', component: MedicalqustionComponent },
  { path: 'doctors-policy', component: DoctorPrivacyPolicyComponent },
  { path: 'contact', component: ContactUsComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
