import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VehiclesPage } from '../vehicles/vehicles';

@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html'
})
export class PhotoPage {
  constructor(public navCtrl: NavController) {
  }

  buttonSkipClick(event) {
    this.navCtrl.setRoot(VehiclesPage);
  }

  buttonUploadClick(event) {
  
  }
}
