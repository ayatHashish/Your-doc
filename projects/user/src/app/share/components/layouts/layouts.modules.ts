import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShareModule } from '../../share.module';
import { BlanklayoutComponent } from './blanklayout/blanklayout.component';
import { AuthlayoutComponent } from './authlayout/authlayout.component';
import { UserlayoutsComponent } from './userlayouts/userlayouts.component';

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
  ],
})
export class LayoutsModule {}
