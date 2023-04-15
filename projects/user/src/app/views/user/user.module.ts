import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { ShareModule } from '../../share/share.module';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './profile/setting/setting.component';
import { SecurityComponent } from './profile/security/security.component';
import { AddressComponent } from './profile/address/address.component';
import { DetailsComponent } from './profile/details/details.component';
import { TermsComponent } from './terms/terms.component';
import { AppoinmentComponent } from './profile/appoinment/appoinment.component';
import { TimeslotsComponent } from './profile/timeslots/timeslots.component';
import { EditslotComponent } from './profile/timeslots/editslot/editslot.component';
import { DelslotsComponent } from './profile/timeslots/delslots/delslots.component';
import { AddTimeComponent } from './profile/timeslots/add-time/add-time.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

@NgModule({
  declarations: [
    ProfileComponent,
    SettingComponent,
    SecurityComponent,
    AddressComponent,
    DetailsComponent,
    TermsComponent,
    AppoinmentComponent,
    TimeslotsComponent,
    EditslotComponent,
    DelslotsComponent,
    AddTimeComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  exports: [
    ProfileComponent,
    SettingComponent,
    SecurityComponent,
    AddressComponent,
    DetailsComponent,
    TermsComponent,
    AppoinmentComponent

  ]
})
export class UserModule { }
