import { Component } from '@angular/core';
import { DoctorsService } from '../../../share/services/doctors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-specialistes',
  templateUrl: './all-specialistes.component.html',
  styleUrls: ['./all-specialistes.component.scss', '../../page/home/specialties/specialties.component.scss']
})
export class AllSpecialistesComponent {
  id: any
  spacialistes: any;
  currentPage = 1;
  constructor(private _spacialist: DoctorsService, private _ActivatedRoute: ActivatedRoute) { this.spacialist() }

  ngOnInit(): void {
    this.loadItems();
  }
  spacialist() {
    // this.id = this._ActivatedRoute.snapshot.params['id'];
    this._spacialist.allSpatialists().subscribe((res) => {
      this.spacialistes = res.data.slice(0,10)
    }
    )
  };
  loadItems() {
    this._spacialist.allSpatialistsPage(this.currentPage).subscribe(response => {
      this.spacialistes = this.spacialistes.concat(response.data);
      this.currentPage++;
    });
  }
}
