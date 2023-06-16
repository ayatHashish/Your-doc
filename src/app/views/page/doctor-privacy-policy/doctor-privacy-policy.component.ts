import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-doctor-privacy-policy',
  templateUrl: './doctor-privacy-policy.component.html',
  styleUrls: ['./doctor-privacy-policy.component.scss']
})
export class DoctorPrivacyPolicyComponent {
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
