import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from '../user/profile/profile.component';
import { AddressComponent } from './profile/address/address.component';
import { SecurityComponent } from './profile/security/security.component';
import { SettingComponent } from './profile/setting/setting.component';
import { DetailsComponent } from './profile/details/details.component';
import { TermsComponent } from './terms/terms.component';
import { AppoinmentComponent } from './profile/appoinment/appoinment.component';
import { TimeslotComponent } from '../doctor/timeslot/timeslot.component';
import { EditslotComponent } from './profile/timeslots/editslot/editslot.component';
const routes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full' },
  { path: 'terms', component: TermsComponent },
  {path: 'profile', component: ProfileComponent,
    children: [
      { path: 'address', component: AddressComponent },
      { path: 'appointments', component:AppoinmentComponent},
      { path: 'security', component: SecurityComponent },
      { path: 'settings', component: SettingComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'timeslots', component: TimeslotComponent },
      { path: 'edit', component: EditslotComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
