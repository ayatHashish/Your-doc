import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  id: any
  doctorDetails: any
  private  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient , private _ActivatedRoute: ActivatedRoute) { }

  allDoctors(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_all_doctors'}`)
  }

  // sendId(id:number,slotId:number)
  //  {

  //   console.log(id +"yalllllllllhwi" +slotId );

  //  }



  getDoctorsDetails(id:number): Observable<any> {
    const data = {
      doctor_id: id,
      details: true
    }; return this._http.post(this.baseUrl + `${'get_doctor_details'}`, data)
  }
  allSpatialistsPage(page: number): Observable<any> {
    return this._http.get(this.baseUrl + `get_all_specialties?page=${page}`)
  }
  allSpatialists(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_all_specialties'}`)
  }
  search(data :any): Observable<any> {
    return this._http.post(this.baseUrl + `${'search'}` , data)
  }

}
