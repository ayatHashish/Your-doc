import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share.module';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { UserlayoutsComponent } from './userlayouts/userlayouts.component';
import { UserModule } from '../../../views/user/user.module';
import { UserRoutingModule } from '../../../views/user/user-routing.module';

@NgModule({
  declarations: [
    BlanklayoutComponent,
    AuthlayoutComponent,
    UserlayoutsComponent

  ],
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    UserModule,
    UserRoutingModule
  ],
})
export class LayoutsModule {}