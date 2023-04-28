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
import { ViewAppoinmentComponent } from './profile/appoinment/view-appoinment/view-appoinment.component';
import { CancelComponent } from './profile/appoinment/cancel/cancel.component';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
import { AddNewAddressComponent } from './profile/address/add-new-address/add-new-address.component';
import { DeleteAddressComponent } from './profile/address/delete-address/delete-address.component';
import { EditAddressComponent } from './profile/address/edit-address/edit-address.component';
import { BookingComponent } from './booking/booking.component';
import { CustomFormsModule } from 'ng2-validation';

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
    AddTimeComponent,
    ViewAppoinmentComponent,
    CancelComponent,
    AddNewAddressComponent,
    DeleteAddressComponent,
    EditAddressComponent,
    BookingComponent,
  ],
  imports: [
    ShareModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    FormsModule,
    CustomFormsModule
  ],
  exports: [
    ProfileComponent,
    SettingComponent,
    SecurityComponent,
    AddressComponent,
    DetailsComponent,
    TermsComponent,
    AppoinmentComponent,
  ],
})
export class UserModule {}
