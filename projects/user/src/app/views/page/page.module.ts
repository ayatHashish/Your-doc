import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { LayoutsModule } from '../../share/components/layouts/layouts.modules';
import { UserModule } from '../user/user.module';
import { DoctorModule } from '../doctor/doctor.module';

import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchComponent } from './home/search/search.component';
import { SpecialtiesComponent } from './home/specialties/specialties.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SearchComponent,
    SpecialtiesComponent,

  ],
  imports: [
    ShareModule,
    CommonModule,
    PageRoutingModule,
    LayoutsModule,
    UserModule,
    CarouselModule,
    DoctorModule,
    ReactiveFormsModule
  ],


})
export class PageModule { }
