import { Component } from '@angular/core';
import { ProfileService } from '../../../share/services/profile.service';
import {profile} from '../../date';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  addTime: any = " "
  pageUrl: String = ""
  profiles: any = " "
  updates: any = " "
  role:any = ""
  constructor(public _profileService: ProfileService) {
    this.role= localStorage.getItem("user_role");
    this.profile()
    this.editurl()
    // this.update()

  }

  editurl(){
 this.pageUrl = window.location.href.split('/')[5];
  }

  profile(){
    this._profileService.profile().subscribe((res) =>{
     this.profiles=res.data
    });
  }
  // update(){
  //   this._profileService.update("data").subscribe((res) =>{
  //    this.updates=res.data
  //    console.log(res.data)
  //   });
  // }

}
