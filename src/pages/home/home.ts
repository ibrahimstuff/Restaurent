import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { EnterPinPage } from '../enter-pin/enter-pin';
import { FavResPage } from '../fav-res/fav-res';
// import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  EnterPinPage = EnterPinPage;
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {

  }

  scanCode() {
    // this.qrScanner.prepare()
    // .then((status: QRScannerStatus) => {
    //    if (status.authorized) {
    //      // camera permission was granted
  
  
    //      // start scanning
    //      let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //        console.log('Scanned something', text);
  
    //        this.qrScanner.hide(); // hide camera preview
    //        scanSub.unsubscribe(); // stop scanning
    //      });
  
    //      // show camera preview
    //      this.qrScanner.show();
  
    //      // wait for user to scan something, then the observable callback will be called
  
    //    } else if (status.denied) {
    //      this.qrScanner.openSettings();
    //      // camera permission was permanently denied
    //      // you must use QRScanner.openSettings() method to guide the user to the settings page
    //      // then they can grant the permission from there
    //    } else {
    //      // permission was denied, but not permanently. You can ask for permission again at a later time.
    //    }
    // })
    // .catch((e: any) => console.log('Error is', e));
    // this.qrScanner.openSettings();
    // this.qrScanner.show();
    // let scanSub = this.qrScanner.scan().subscribe((text: string) => {
    //   console.log('Scanned something', text);

    //   this.qrScanner.hide(); // hide camera preview
    //   scanSub.unsubscribe(); // stop scanning
    // });
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is here
     }, (err) => {
         // An error occurred
     });
  }
  fav() {
    this.navCtrl.push(FavResPage);
  }
}
