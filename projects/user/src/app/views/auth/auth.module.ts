import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { ReAssignPassComponent } from './re-assign-pass/re-assign-pass.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShareModule } from '../../share/share.module';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    VerificationCodeComponent,
    ReAssignPassComponent,
    RegisterComponent ,
    ForgetpassComponent,
    LoginComponent,
  
  ],
  imports: [
    CommonModule,
    AuthRoutingModule ,
    ShareModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports:[
     VerificationCodeComponent,
    ReAssignPassComponent,
    RegisterComponent ,
    ForgetpassComponent,
    LoginComponent
  ]
})

export class AuthModule { }
