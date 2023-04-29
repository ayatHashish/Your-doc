import { Component, HostListener } from '@angular/core';
import { AuthService } from '../../../share/services/auth.service';
import { Router } from '@angular/router';
import { ProfileService } from '../../services/profile.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isScrolled = false;
  profiles:any
  constructor(public _auth: AuthService , private _router: Router, private _profileService: ProfileService){

  }
  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this._auth.isLoggedIn = true;
    }
    if(this._auth.isLoggedIn == true){
      this.profile()
    }
  }
  logout() {
    this._auth.logout().subscribe(
      (res) => {
        localStorage.clear();
        this._auth.isLoggedIn = false;
      },
      (e) => {
        console.log(e.error.message);
        this._auth.isLoggedIn = true;
      },
      () => {
        console.log('done');
        this._router.navigateByUrl('auth/login');
      }
    );
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

 // getprofilpic
  profile() {
    this._profileService.profile().subscribe((res) => {
      this.profiles = res.data
    });
  }
}

