import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';
import { AppRoutingModule } from '../../app-routing.module';




@NgModule({
  declarations: [
    ForgetpassComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule],

  exports:[ForgetpassComponent]
})
export class ForgetPasModule { }
