import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { ShareModule } from './share/share.module';
import { LayoutsModule } from './share/components/layouts/layouts.modules';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdbModalModule,
    MdbCarouselModule,
    ShareModule,
    LayoutsModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
