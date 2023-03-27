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

@NgModule({
  declarations: [
    ProfileComponent,
    SettingComponent,
    SecurityComponent,
    AddressComponent,
    DetailsComponent,
    TermsComponent,
    AppoinmentComponent
  ],
  imports: [
    ShareModule,
    CommonModule,
    UserRoutingModule,
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
