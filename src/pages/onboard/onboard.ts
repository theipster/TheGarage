import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-onboard',
  templateUrl: 'onboard.html'
})
export class OnboardPage {
  constructor(public navCtrl: NavController) {
  }

  buttonClick(event) {
    this.navCtrl.push(
        RegisterPage
    );
  }
}
