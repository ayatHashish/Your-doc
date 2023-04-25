import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressDoctorService {
  baseUrl = 'http://ydoctor.atwebpages.com/user/'

  constructor(private _http: HttpClient) { }

  addNewAddress(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'add_new_address'}`, data)
  }
  updateAddress(data: any): Observable<any> {
    return this._http.post(this.baseUrl + `${'update_address'}`, data)
  }
  deleteAddress(id: number): Observable<any> {
    const isDelete = { address_id: id };
    return this._http.delete(this.baseUrl + `${'delete_address'}`, { body: isDelete })
  }
  getMyAddresses(): Observable<any> {
    return this._http.get(this.baseUrl + `${'get_my_addresses'}`)
  }

}
