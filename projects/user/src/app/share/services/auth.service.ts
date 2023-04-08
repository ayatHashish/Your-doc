import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://127.0.0.1:8000/user/'
  constructor(private _http: HttpClient) { }

  register(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'auth/register'}`, data)
  }

  login(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'auth/login'}`, data)
  }

  // logout(): Observable<any> {
  //   return this._http.post(this.baseUrl + `${'auth/logout'}`, null).toPromise()
  // }
  logout() {
    return this._http.post(this.baseUrl, {}).toPromise();
  }


}
