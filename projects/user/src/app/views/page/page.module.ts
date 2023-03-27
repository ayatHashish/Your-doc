import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { LayoutsModule } from '../../share/components/layouts/layouts.modules';
import { UserModule } from '../user/user.module';

import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SpcialistComponent } from './home/spcialist/spcialist.component';
import { SearchComponent } from './home/search/search.component';
@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    SpcialistComponent,
    SearchComponent,

  ],
  imports: [
    ShareModule,
    CommonModule,
    PageRoutingModule,
    LayoutsModule,
    UserModule,
    CarouselModule
  ],
})
export class PageModule { }
