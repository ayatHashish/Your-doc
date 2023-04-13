import { Component } from '@angular/core';
import { AuthService } from '../../../share/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(public _auth: AuthService , private _router: Router,){}
  ngOnInit(): void {

    if (localStorage.getItem('token')) {
      this._auth.isLoggedIn = true;
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



}

