import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl = 'http://ydoctor.atwebpages.com/user/'

  constructor(private _http: HttpClient) { }

  booking(data:any): Observable<any> {
    return this._http.post(this.baseUrl + `${'booking'}`,data)
  }

  bookingDetails(data:any): Observable<any> {
    return this._http.post(this.baseUrl + `${'booking_details'}`,data)
  }


  canselBooking(data:any): Observable<any> {
    return this._http.post(this.baseUrl + `${'cancel_booking'}`,data)
  }


  acceptBooking(data:any): Observable<any> {
    return this._http.post(this.baseUrl + `${'accept_booking'}`,data)
  }
  getMyAppointment(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_my_appointments'}`)
  }



}
