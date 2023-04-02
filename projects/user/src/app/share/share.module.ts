import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NotfoundComponent,
    NavbarComponent,
    FooterComponent,

    /* UserlayoutsComponent, */

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
