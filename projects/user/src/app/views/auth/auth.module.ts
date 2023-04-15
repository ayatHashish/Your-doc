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
import { TestComponent } from './test/test.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    VerificationCodeComponent,
    ReAssignPassComponent,
    RegisterComponent ,
    ForgetpassComponent,
    LoginComponent,
    TestComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule ,
    ShareModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserModule,

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
