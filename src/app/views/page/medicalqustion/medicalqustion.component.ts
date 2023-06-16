import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-medicalqustion',
  templateUrl: './medicalqustion.component.html',
  styleUrls: ['./medicalqustion.component.scss'],
})
export class MedicalqustionComponent {
    pageUrl: String = ""
  pageTitle: any = ""
  ngAfterViewInit() {
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button: any) => {

      button.addEventListener('click', () => {
        const parent = button.parentElement;
        const siblings = parent.parentNode.children;

        for (let i = 0; i < siblings.length; i++) {
          if (siblings[i] !== parent) {
            siblings[i].classList.remove('active');
          }
        }
        button.parentElement.classList.toggle('active');
      });
    });
  }

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
