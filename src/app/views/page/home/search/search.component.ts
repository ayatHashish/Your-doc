import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorsService } from 'src/app/share/services/doctors.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent {
  specialties: any;
  errorMsg = '';

  constructor(private _router: Router, private _specialty: DoctorsService) {
    this.getAllSpecialties();
  }

  searchForm = new FormGroup({
    doctor_name: new FormControl('', [Validators.required]),
    specialty_id: new FormControl('', [Validators.required]),
  });
  get doctor_name() { return this.searchForm.get('doctor_name') }

  search() {
    if (this.searchForm.valid) {
      const doctor_name = this.searchForm.value.doctor_name;
      const sepcial_id = this.searchForm.value.specialty_id;
      this._router.navigate(['doctor/search-results'], {
        queryParams: { doctor_name: doctor_name, sepcial_id: sepcial_id }
      }
      );
    } else {
      this.errorMsg = 'You should type docotr name and choose his specialist.'
    }
  }

  getAllSpecialties() {
    this._specialty.allSpatialists().subscribe((res) => {
      this.specialties = res.data;
    });
  }

}
