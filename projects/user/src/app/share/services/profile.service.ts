import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 baseUrl = 'http://127.0.0.1:8000/user/'
  constructor(private _http: HttpClient) { }
  
    profile(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_profile_data'}`)
  }

  // update(data: any): Observable<any> {
  //   return this._http.post(this.baseUrl + `${'update_user_info'}`,data)
  // }
}
