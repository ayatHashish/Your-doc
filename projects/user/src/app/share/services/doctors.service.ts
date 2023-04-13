import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  baseUrl = 'http://ydoctor.atwebpages.com/user/'
  constructor(private _http: HttpClient) { }

  allDoctors(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_all_doctors'}`)
  }

  getDoctorsDetails(id:number): Observable<any> {
    const data = {
      doctor_id: id,
      details: true
    }; return this._http.post(this.baseUrl + `${'get_doctor_details'}`, data)
  }

}
