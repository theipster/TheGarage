import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { OnboardPage } from '../pages/onboard/onboard';
import { PhotoPage } from '../pages/photo/photo';
import { RegisterPage } from '../pages/register/register';
import { VehiclesPage } from '../pages/vehicles/vehicles';

import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    OnboardPage,
    PhotoPage,
    RegisterPage,
    VehiclesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    OnboardPage,
    PhotoPage,
    RegisterPage,
    VehiclesPage
  ],
  providers: [
    Camera,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
