import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {
  constructor(public navCtrl: NavController, private camera: Camera) {
  }

  buttonNewReading_click(event, card) {

    // Determine which car
    const carName = card.getElementsByTagName('ion-card-title')[0].innerText;

    // Camera options
    const options: CameraOptions = {
        correctOrientation: true,
    };

    // Take photo and handle
    this.camera.getPicture(options)
        .then(
            (imageData) => {
                var fileName = imageData;

                // TODO: Do something with filename.
            },
            (error) => {
            }
        );
  }
}
