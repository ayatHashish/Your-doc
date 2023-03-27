import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../user/profile/profile.component';
import { AddressComponent } from './profile/address/address.component';
import { SecurityComponent } from './profile/security/security.component';
import { SettingComponent } from './profile/setting/setting.component';
import { DetailsComponent } from './profile/details/details.component';
import { TermsComponent } from './terms/terms.component';
import { AppoinmentComponent } from './profile/appoinment/appoinment.component';
const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'terms', component: TermsComponent },
  {path: 'profile', component: ProfileComponent,
    children: [
      { path: 'address', component: AddressComponent },
      { path: 'appoinment', component:AppoinmentComponent},
      { path: 'security', component: SecurityComponent },
      { path: 'setting', component: SettingComponent },
      { path: 'details', component: DetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
