import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthlayoutComponent } from './share/components/layouts/authlayout/authlayout.component';
import { BlanklayoutComponent } from './share/components/layouts/blanklayout/blanklayout.component';
import { UserlayoutsComponent } from './share/components/layouts/userlayouts/userlayouts.component';
import { NotfoundComponent } from './share/components/notfound/notfound.component';
import { AuthGuard } from './share/auth.guard';

const routes: Routes = [
  {
    path: '', component: BlanklayoutComponent,
    loadChildren: () => import('./views/page/page.module').then((m) => m.PageModule),
  },
  {
    path: 'auth', canActivate: [AuthGuard], component: AuthlayoutComponent,
    loadChildren: () => import('./views/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'user', canActivate: [AuthGuard], component: UserlayoutsComponent,
    loadChildren: () => import('./views/user/user.module').then((m) => m.UserModule),
  },

  {
    path: 'doctor', component: UserlayoutsComponent,
    loadChildren: () => import('./views/doctor/doctor.module').then((m) => m.DoctorModule),
  },


  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {

  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
