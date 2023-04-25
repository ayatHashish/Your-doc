import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorsService } from 'projects/user/src/app/share/services/doctors.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  // <option value="{{specialty.id}}"  *ngFor ="let specialty of specialties">{{specialty.title}}</option>
  nameDoctor : any
  specialties:any
  constructor(private _search: DoctorsService, private _router: Router,  private _specialty:DoctorsService) {
    this.search()
    this. getAllSpecialties()
  }
  searchForm =new FormGroup({
    doctor_name : new FormControl('', [Validators.required, Validators.email]),
    specialty_id: new FormControl('', [Validators.required]),
  })
  search(){
    this._search.search(this.searchForm.value).subscribe(
      (res)=>{
this.nameDoctor = res.data
console.log(res.data)
},
()=> this._router.navigateByUrl('/profile')

   )}
   getAllSpecialties(){
    this._specialty.allSpatialists().subscribe((res) => {
      this.specialties = res.data
    });

  }
}
