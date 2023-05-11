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
  changePassword(id: number,password:string ,confirmation:string ): Observable<any> {
    const body = {
      user_id: id,
      password: password,
      password_confirmation: confirmation
    };

    return this._http.post(this.baseUrl + `${'auth/change_password'}`, body)
  }
  forgetPassword(email: any): Observable<any> {
    const body = {
      email: email,
    };
    return this._http.post(this.baseUrl + `${'auth/send_verification_code'}`, body)
  }

  verificationCode(code: any): Observable<any> {
    const body = {
      code: code,
    };
    return this._http.post(this.baseUrl + `${'auth/validate_verification_code'}`, body)
  }


  logout(): Observable<any> {
    return this._http.post(this.baseUrl + `${'logout'}`, null)
  }
  userLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
