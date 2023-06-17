import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent {
  pageUrl: String = ""
  pageTitle: any = ""

  constructor(private router: Router) {
    router.events.pipe(
      filter(res => res instanceof NavigationEnd)
    ).subscribe(res => {
      this.pageUrl = Object.values(res)[1];
      this.pageTitle = this.pageUrl.split('/')[2];
      // console.log(this.pageUrl);
    });
  }
}
