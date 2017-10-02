import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { QrCodePage } from '../hotel-choose/hotel-choose';

/**
 * Generated class for the EnterPinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-enter-pin',
  templateUrl: 'enter-pin.html',
})
export class EnterPinPage implements AfterViewInit{
  test = null;
  @ViewChild('numval') vc;
  tabBarEle : any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private keyboard: Keyboard ) {
    this.tabBarEle = document.querySelector('.tabbar.show-tabbar');
  }

  // ngOnInit() {
  //   document.getElementById("partitioned").focus();
  // }

  ionViewDidLoad() {

    console.log('ionViewDidLoad EnterPinPage');
    setTimeout(() => {
      var input = <HTMLInputElement>document.getElementById('partitioned');
      console.log("Input :",input);
      input.focus();  
      this.keyboard.show(); // for android
      // this.vc.setFocus();
    },150); //a least 150m
    // document.getElementById("partitioned").focus();
  }

  ngAfterViewInit() {
    // var input = <HTMLInputElement>document.getElementById('partitioned');
    // console.log("Input :",input);
    // input.focus();            
  }

  ionViewWillEnter() {
    this.tabBarEle.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarEle.style.display = 'flex';
  }


  pinSub() {
    this.navCtrl.push(QrCodePage);
  }

}
