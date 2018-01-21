import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PhotoPage } from '../photo/photo';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  constructor(public navCtrl: NavController) {
  }

  buttonRegisterClick(event) {
    this.navCtrl.push(
        PhotoPage
    );
  }
}
