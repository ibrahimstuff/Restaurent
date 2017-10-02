import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from './../cart/cart';

@IonicPage()
@Component({
  selector: 'page-qr-code',
  templateUrl: 'hotel-choose.html',
})
export class QrCodePage {

  dineIn = true;
  booking = false;
  tabBarEle : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }

  ionViewWillEnter() {
    this.tabBarEle.style.display = 'none';
  }

  ionViewWillLeave() {
    // this.tabBarEle.style.display = 'flex';
  }

  goCart() {
    this.navCtrl.push(CartPage);
  }

}
