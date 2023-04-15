import { Component ,Input  } from '@angular/core';
import { ProfileService } from 'projects/user/src/app/share/services/profile.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss','./../details/details.component.scss'],
})
export class SettingComponent {
  @Input() profilesetting: any;

  constructor (){
    console.log(this.profilesetting);
  }



}
