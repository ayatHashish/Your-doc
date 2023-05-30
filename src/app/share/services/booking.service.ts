
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private baseUrl = environment.baseUrl;

  constructor(private _http: HttpClient) { }


  booking(data:object): Observable<any> {

    return this._http.post(this.baseUrl + `${'booking'}`, data)
  }
  bookingDetails(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'booking_details'}`, data)
  }

  cancelBooking(id: number): Observable<any> {
    const body = { booking_id: id };
    return this._http.post(this.baseUrl + `${'cancel_booking'}`, body)
  }
  acceptBooking(id: number): Observable<any> {
    const body = { booking_id: id };
    return this._http.post(this.baseUrl + `${'accept_booking'}`, body)
  }
  // other way with get
  getMyAppointment(pageNum: number): Observable<any> {
    return this._http.get(this.baseUrl + `get_my_appointments?page=${pageNum}`)
  }
  // first Way with post
  getDatesByday(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `get_dates_by_day`, data)
  }

  allSpatialistsDostors(id: number, pageNum: number): Observable<any> {
    return this._http.get(this.baseUrl + `get_doctors_by_specialty?page=${pageNum}&specialty_id=${id}`)
  }
}
