import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/app/share/services/doctors.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss','../doctors/doctors.component.scss']
})
export class SearchResultsComponent {
  searchQuery: any;
  searchResults: any;

  constructor(private route: ActivatedRoute, private _search: DoctorsService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = {
        doctor_name: params['doctor_name'],
        specialty_id: params['sepcial_id']
      }
    });

    this.searchResult()
  }
  searchResult() {
    this._search.search(this.searchQuery).subscribe(
      (results) => {
        this.searchResults = results.data;
        console.log(results.data);
      },
      (e) => { console.log(e); },
    )
  }
}
