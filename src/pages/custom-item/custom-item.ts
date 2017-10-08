import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar, ModalController } from 'ionic-angular';
import { BreadPage } from '../bread/bread';

/**
 * Generated class for the CustomItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-custom-item',
  templateUrl: 'custom-item.html',
})
export class CustomItemPage {
  @ViewChild(Navbar) navBar: Navbar;
  tabBarEle : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillEnter() {
    this.tabBarEle.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarEle.style.display = 'flex';
  }
  ionViewDidLoad() {
  }
  gotoHome() {
    this.navCtrl.pop();
  }
  public openModal() {
    let  myBread = this.modalCtrl.create(BreadPage);
    myBread.present(); 
  }
}
