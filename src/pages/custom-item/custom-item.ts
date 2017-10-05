import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Navbar } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewWillEnter() {
    this.tabBarEle.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarEle.style.display = 'flex';
  }
  ionViewDidLoad() {
    // this.navBar.backButtonClick = (e:UIEvent)=>{
    //  // todo something
    //  this.navCtrl.pop();
    // }
  }
  gotoHome() {
    this.navCtrl.pop();
  }
}
