import { Component } from '@angular/core';
import { ProfileService } from '../../../share/services/profile.service';
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
  role: any = ""
  itemId: any;
  itemfirstName: any;
  itemlastName: any;
  itemEmail: any;
  itemPhone: any;
  itemgender: any;
  itembirthDate: any;
  item = { id: 1 };

  constructor(public _profileService: ProfileService) {
    this.role = localStorage.getItem("user_role");
    this.profile()
    this.editurl()
  }
  editurl() {
    this.pageUrl = window.location.href.split('/')[5];
  }
  profile() {
    this._profileService.profile().subscribe((res) => {
      this.profiles = res.data
    });
  }

}



// import { Component } from '@angular/core';
// import { ProfileService } from '../../../share/services/profile.service';
// @Component({
//   selector: 'app-profile',
//   templateUrl: './profile.component.html',
//   styleUrls: ['./profile.component.scss']
// })
// export class ProfileComponent {
//   addTime: any = " "
//   pageUrl: String = ""
//   profiles: any = " "
//   updates: any = " "
//   role: any = ""
//   itemId: any;
//   itemfirstName: any;
//   itemlastName: any;
//   itemEmail: any;
//   itemPhone: any;
//   itemgender: any;
//   itembirthDate: any;
//   item = { id: 1 };

//   constructor(public _profileService: ProfileService) {
//     this.role = localStorage.getItem("user_role");
//     this.profile()
//     this.editurl()
//   }
//   editurl() {
//     this.pageUrl = window.location.href.split('/')[5];
//   }
//   profile() {
//     this._profileService.profile().subscribe((res) => {
//       this.profiles = res.data
//     });
//   }

// }
