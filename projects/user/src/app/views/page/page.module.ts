import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';
import { LayoutsModule } from '../../share/components/layouts/layouts.modules';
import { UserModule } from '../user/user.module';
import { BannerComponent } from './banner/banner.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,

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
