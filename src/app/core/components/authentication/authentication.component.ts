import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormTypes } from '../../models/authorization.model';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {

  formTypes = FormTypes;
  activeForm = FormTypes.login;

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  dismissPage() {
    this.modalCtrl.dismiss();
  }
}
