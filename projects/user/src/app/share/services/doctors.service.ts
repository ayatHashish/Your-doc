import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  baseUrl = 'http://127.0.0.1:8000/user/'
  constructor(private _http: HttpClient) { }



  allDoctors(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_all_doctors'}`)
  }

}
