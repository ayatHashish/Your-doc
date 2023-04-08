import { Component } from '@angular/core';
import {DoctorsService} from '../../../share/services/doctors.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent {
  constructor(private _doctors: DoctorsService, private _router: Router) { }
}
