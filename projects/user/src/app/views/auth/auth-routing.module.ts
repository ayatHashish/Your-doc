import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { LoginComponent } from './login/login.component';
import { ReAssignPassComponent } from './re-assign-pass/re-assign-pass.component';
import { RegisterComponent } from './register/register.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';

const routes: Routes = [

  {path: '',  redirectTo: 'login', pathMatch: 'full',},
  {path: 'login', component: LoginComponent,  },
  { path: 'signup', component: RegisterComponent,},
  { path: 'forgot-password', component: ForgetpassComponent,},
  { path: 'verify-code',component: VerificationCodeComponent,},
  {path: 'edit-password',component: ReAssignPassComponent,},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
