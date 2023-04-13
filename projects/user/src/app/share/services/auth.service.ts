import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggedIn = false;
  baseUrl = 'http://ydoctor.atwebpages.com/user/'
  constructor(private _http: HttpClient) { }

  register(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'auth/register'}`, data)
  }

  login(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'auth/login'}`, data)
  }

  changePassword(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'auth/change_password'}`, data)
  }

  logout(): Observable<any> {
    return this._http.post(this.baseUrl + `${'logout'}`, null)
  }
  userLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
