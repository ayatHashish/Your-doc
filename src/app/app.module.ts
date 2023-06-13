import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';
import { LayoutsModule } from './share/components/layouts/layouts.modules'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './share/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule,
    LayoutsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    TimepickerModule.forRoot(),
    Ng2SearchPipeModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
