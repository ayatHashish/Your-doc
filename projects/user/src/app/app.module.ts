import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ForgetPasModule } from './componant/forget-pas/forget-pas.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './componant/home/home.component';
import { NotfoundComponent } from './componant/notfound/notfound.component';
import { AboutComponent } from './componant/about/about.component';
import { DoctorsComponent } from './componant/doctors/doctors.component';
import { AppointmentComponent } from './componant/appointment/appointment.component';
import { ProfileComponent } from './componant/profile/profile.component';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    DoctorsComponent,
    AppointmentComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ForgetPasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
