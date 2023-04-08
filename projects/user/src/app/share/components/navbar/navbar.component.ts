import { Component } from '@angular/core';
import { AuthService } from '../../../share/services/auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private _auth: AuthService , private _router: Router,){}
  logout() {
    this._auth.logout().then(() => {
      this._router.navigateByUrl('auth/login');
    });

}
}
