import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TimeslotService {

  baseUrl = 'http://ydoctor.atwebpages.com/user/'
  constructor(private _http: HttpClient) { }

  getAllSlots(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_my_slots'}`)
  }
  addSlot(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'add_slot'}`, data)
  }

  deleteslots(id: number): Observable<any> {
    const isDelete = { slot_id: id };
    return this._http.delete(this.baseUrl + `${'delete_slot'}`, { body: isDelete })
  }

  updateSlots(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'update_slot'}`, data)
  }
  getAddress(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_my_addresses'}`,)
  }

}


