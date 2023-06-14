import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() profileDetails: any;
  constructor(private _router: Router, private elementRef: ElementRef, private renderer: Renderer2) { }

  makeSettingsTabActive() {
    const settingsTab = this.elementRef.nativeElement.querySelector('#settings');
    console.log(settingsTab);
    
    this.renderer.addClass(settingsTab, 'show');
    this.renderer.addClass(settingsTab, 'active');
  }


  navigateToSettingsTab() {
    // Perform any necessary logic before navigating
    this._router.navigateByUrl('/user/profile/settings');
  }
  // openNewTab() {
  //   window.open('http://localhost:4200/user/profile/settings', '_self');
  // }
}
