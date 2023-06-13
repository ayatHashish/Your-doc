import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ActivatedRoute } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class DoctorsService {
<<<<<<< Updated upstream:src/app/share/services/doctors.service.ts
  id: any
  doctorDetails: any
  private  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient , private _ActivatedRoute: ActivatedRoute) { }
=======
  baseUrl = 'http://ydoctor.atwebpages.com/user/';
  constructor(private _http: HttpClient) {}
>>>>>>> Stashed changes:projects/user/src/app/share/services/doctors.service.ts

  allDoctors(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_all_doctors'}`);
  }

<<<<<<< Updated upstream:src/app/share/services/doctors.service.ts
  // sendId(id:number,slotId:number)
  //  {

  //   console.log(id +"yalllllllllhwi" +slotId );

  //  }



  getDoctorsDetails(id:number): Observable<any> {
=======
  getDoctorsDetails(id: number): Observable<any> {
>>>>>>> Stashed changes:projects/user/src/app/share/services/doctors.service.ts
    const data = {
      doctor_id: id,
      details: true,
    };
    return this._http.post(this.baseUrl + `${'get_doctor_details'}`, data);
  }

  allSpatialistsPage(page: number): Observable<any> {
    return this._http.get(this.baseUrl + `get_all_specialties?page=${page}`);
  }

  allSpatialists(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_all_specialties'}`);
  }
  
  search(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'search'}`, data);
  }
}
