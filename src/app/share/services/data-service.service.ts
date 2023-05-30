import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataServiceService {

  private dataSubject = new BehaviorSubject<object>({});
  selected = this.dataSubject.asObservable();

  setData(data: object) {
    this.dataSubject.next(data);
  }
}
