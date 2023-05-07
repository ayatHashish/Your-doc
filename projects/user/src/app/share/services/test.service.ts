import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class TestService {
  projects: any;
  private  baseUrl = environment.baseUrl;
  constructor(private _http: HttpClient) { }
  
  getAllbooking(data:any)
   {
    return this._http.post(this.baseUrl + `${'booking'}`,data ).subscribe({
      next: (res) => {this.projects = res,
        console.log(this.projects)
      },
      error: (error) => { },
      complete: () => {},


    });
  }
}
