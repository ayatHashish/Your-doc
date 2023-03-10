import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  baseUrl = 'http://y.d.moshabrawy.com/user/'

  register(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'auth/register'}`, data)
  }

  login(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'auth/login'}`, data)
  }

}
