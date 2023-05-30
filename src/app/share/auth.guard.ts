import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.userLoggedIn() && state.url.includes('auth')) {
      // User is authenticated, redirect to home page
      this.router.navigate(['/']);
      return false;
    } else if (!this.authService.userLoggedIn() && state.url.includes('user')) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    return true;
  }
}



