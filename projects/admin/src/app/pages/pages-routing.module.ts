import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: '', redirectTo: 'sidebar', pathMatch: 'full', },
  // { path: 'sidebar', component: SidebarComponent },
  // { path: 'home', component: HomeComponent,
  //  children: [
  //   { path: 'banner', component: BannerComponent },
  //   { path: 'specialties', component: SpecialtiesComponent },]
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
