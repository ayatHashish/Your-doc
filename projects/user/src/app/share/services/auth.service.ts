import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseUrl;

  public isLoggedIn = false;
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
 forgetPassword(email: string): Observable<any> {
  const body = { email };
    return this._http.post(this.baseUrl + `${'auth/send_verification_code'}`, body)
  }

  logout(): Observable<any> {
    return this._http.post(this.baseUrl + `${'logout'}`, null)
  }
  userLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
