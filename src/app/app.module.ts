import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from './../pages/login/login';
import { SignupPage } from './../pages/signup/signup'
import { QrCodePage } from './../pages/hotel-choose/hotel-choose';
import { EnterPinPage } from './../pages/enter-pin/enter-pin';
import { ChoosesComponent } from './../components/chooses/chooses';
import { HotelItemsComponent } from './../components/hotel-items/hotel-items';
import { CartPage } from './../pages/cart/cart';
import { CustomItemPage } from '../pages/custom-item/custom-item';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
// import { QRScanner } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Keyboard } from '@ionic-native/keyboard';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    QrCodePage,
    EnterPinPage,
    ChoosesComponent,
    HotelItemsComponent,
    CartPage,
    CustomItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    QrCodePage,
    EnterPinPage,
    CartPage,
    CustomItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera,
    BarcodeScanner,
    Keyboard
  ]
})
export class AppModule {}
