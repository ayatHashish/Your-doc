import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';

import { LayoutsModule } from '../../share/components/layouts/layouts.modules';
import { AboutComponent } from '../user/about/about.component';
import { DoctorsComponent } from '../user/doctors/doctors.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    HomeComponent,

  ],
  imports: [
    ShareModule,
    CommonModule,
    PageRoutingModule,
    LayoutsModule,
    UserModule
  ],
})
export class PageModule { }
