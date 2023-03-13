import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,
/*     UserlayoutsComponent, */

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
  ]
})
export class ShareModule { }
