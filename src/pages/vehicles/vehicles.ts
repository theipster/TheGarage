import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { File, DirectoryEntry } from '@ionic-native/file';

@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html'
})
export class VehiclesPage {
  constructor(public navCtrl: NavController, private camera: Camera, private file: File) {
  }

  buttonNewReading_click(event, card) {

    // Ensure odometer dir exists.
    const carName: string = card.getElementsByTagName('ion-card-title')[0].innerText;
    const rootDir: string = this.file.externalDataDirectory;
    let odoDir: string = this.ensureOdometerDirExists(rootDir, carName);

    // Take photo and handle
    this.takePhoto(odoDir);
  }

  ensureOdometerDirExists (rootDir: string, carName: string): string {
    this.file.resolveDirectoryUrl(rootDir)
        .then(
            (dirEntry: DirectoryEntry) => this.createOrGetChildDirectory(dirEntry, carName),
            error => console.log('Could not resolve root dir: '+JSON.stringify(error))
        ).then(
            (dirEntry: DirectoryEntry) => this.createOrGetChildDirectory(dirEntry, 'odometer'),
            error => console.log('Could not create car dir: '+JSON.stringify(error))
        ).then(
            null,
            error => console.log('Could not create odometer dir: '+JSON.stringify(error))
        );
    return rootDir+'/'+carName+'/odometer';
  }

  createOrGetChildDirectory (parentDir: DirectoryEntry, childDir: string): Promise<DirectoryEntry> {
      let flags = {} as any;
      flags.create = true;
      return this.file.getDirectory(
          parentDir,
          childDir,
          flags
      );
  }

  takePhoto (odoDir: string) {
    const options: CameraOptions = {};
    options.correctOrientation = true;
    options.targetWidth = 1000;  // Let's save space!
    this.camera.getPicture(options)
        .then(
            imageFile => this.saveImage(imageFile, odoDir),
            error => console.log('Could not take picture.')
        ).then(
            entry => console.log('Successfully saved image: '+JSON.stringify(entry)),
            error => console.log('Could not save image: '+JSON.stringify(error))
        );
  }

  saveImage (imageFile: string, saveDir: string): Promise<any> {

      // Parse source file
      let srcParts = imageFile.split('/');
      let srcName = srcParts.pop();
      let srcPath = srcParts.join('/');

      // Move the file
      return this.file.moveFile(
          srcPath,
          srcName,
          saveDir,
          ''
      );
  }
}
