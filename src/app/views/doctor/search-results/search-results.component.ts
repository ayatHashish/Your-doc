import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
  searchQuery: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.searchQuery = this.route.snapshot.params['query'];
  }
}
