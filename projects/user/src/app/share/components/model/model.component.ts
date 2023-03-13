import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './model.component.html',
})
export class ModelComponent {
  constructor(public modalRef: MdbModalRef<ModelComponent>) {}
}
