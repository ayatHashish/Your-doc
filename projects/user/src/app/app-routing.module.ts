import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componant/about/about.component';
import { AppointmentComponent } from './componant/appointment/appointment.component';
import { DoctorsComponent } from './componant/doctors/doctors.component';

import { ForgetpassComponent } from './componant/forget-pas/forgetpass/forgetpass.component';
import { HomeComponent } from './componant/home/home.component';
import { NotfoundComponent } from './componant/notfound/notfound.component';
import { ProfileComponent } from './componant/profile/profile.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'home', component: HomeComponent},
  { path:'about', component: AboutComponent},
  { path:'doctors', component: DoctorsComponent},
  { path:'appointment', component: AppointmentComponent},
  { path:'login', component: LoginComponent},
  { path:'profile', component: ProfileComponent},
  { path:'register', component: RegisterComponent},
  { path:'forget', component: ForgetpassComponent},
  { path:'**', component: NotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
