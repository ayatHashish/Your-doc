import { Component } from '@angular/core';
import { ProfileService } from '../../../share/services/profile.service';
import {profile} from '../../date';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  pageUrl: String = ""
  profiles: any = " "

  constructor(public _profileService: ProfileService) {

    this.profile()
    this.editurl()
  }


  editurl(){
 this.pageUrl = window.location.href.split('/')[5];
    console.log(this.pageUrl)
  }

  profile(){
    this._profileService.profile().subscribe((res) =>{
     this.profiles=res.data
     console.log(res.data)
    });
  }
}
