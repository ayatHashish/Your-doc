import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  pageUrl: String = ""

  constructor() {
    this.pageUrl = window.location.href.split('/')[5];
    // console.log(this.pageUrl)
  }
}
