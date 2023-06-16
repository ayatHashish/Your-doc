import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {
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
