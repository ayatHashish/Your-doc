import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-medicalqustion',
  templateUrl: './medicalqustion.component.html',
  styleUrls: ['./medicalqustion.component.scss'],
})
export class MedicalqustionComponent {
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
}
