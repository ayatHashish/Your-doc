import { Component } from '@angular/core';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import { LoginComponent } from '../../../views/auth/login/login.component';
import { RegisterComponent } from '../../../views/auth/register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  modalRef: MdbModalRef<LoginComponent> | null = null;
  modalRegest: MdbModalRef<RegisterComponent> | null = null;

  constructor(public modalService: MdbModalService) { }
  openLoginModal() {
    this.modalRef = this.modalService.open(LoginComponent, {
      modalClass: 'modal-dialog-centered login_model'
    })
  }
  openRegisterModal() {

    this.modalRegest = this.modalService.open(RegisterComponent, {
      modalClass: 'modal-dialog-centered register_model'
    })
  }




}
