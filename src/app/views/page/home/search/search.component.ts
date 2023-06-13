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
  nameDoctor: any;
  specialties: any;
  id: any
  errorMsg = '';
  constructor(
    private _search: DoctorsService,
    private _router: Router,
    private _specialty: DoctorsService
  ) {
    this.getAllSpecialties();
  }
  searchForm = new FormGroup({
    doctor_name: new FormControl('', [Validators.required]),
    specialty_id: new FormControl('', [Validators.required]),
  });
  get doctor_name() { return this.searchForm.get('doctor_name') }

  search() {
    const doctorName = this.searchForm.value.doctor_name;
    const specialtyId = this.searchForm.value.specialty_id;


    if (this.searchForm.valid) {
      this._search.search(this.searchForm.value).subscribe(
        (res) => {
          console.log(this.searchForm.value.specialty_id);

          this._router.navigateByUrl(`doctor/searchresults?doctor_name=${doctorName}&id=${specialtyId}`);
        
          this.nameDoctor = res.data;
          this.id = res.data[0].id
          console.log(this.id);
        },
        (e) => {
          console.log(e.error);
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
