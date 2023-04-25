import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorsService } from 'projects/user/src/app/share/services/doctors.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

export class SearchComponent {
  nameDoctor: any;
  specialties: any;
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
  get doctor_name(){return this.searchForm.get('doctor_name')}

  search() {
    if(this.searchForm.valid){
      this._search.search(this.searchForm.value).subscribe(
        (res) => {
          this.nameDoctor = res.data;
          console.log(res.data);
        },
        () => this._router.navigateByUrl('/profile')
      );
    }else{
      this.errorMsg = 'You should type docotr name and choose his specialist.'
    }
  }

  getAllSpecialties() {
    this._specialty.allSpatialists().subscribe((res) => {
      this.specialties = res.data;
    });
  }
}
