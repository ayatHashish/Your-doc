import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './home/banner/banner.component';
import { HomeComponent } from './home/home.component';
import { SpecialtiesComponent } from './home/specialties/specialties.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'banner', component: BannerComponent },
      { path: 'specialties', component: SpecialtiesComponent },]
     
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
