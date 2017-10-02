import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  tabBarEle: any;
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
    this.items = [{
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      add: 1
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      add: 3
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      add: 2
    }
  ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  ionViewWillEnter() {
    this.tabBarEle.style.display = 'none';
  }

  ionViewWillLeave() {
    // this.tabBarEle.style.display = 'flex';
  }

}
