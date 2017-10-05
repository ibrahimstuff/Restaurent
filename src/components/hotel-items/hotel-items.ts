import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomItemPage } from '../../pages/custom-item/custom-item';

/**
 * Generated class for the HotelItemsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'hotel-items',
  templateUrl: 'hotel-items.html'
})
export class HotelItemsComponent {

  items: any;
  Breakfast: boolean;
  Lunch: boolean;

  constructor(private navctrl: NavController) {
    this.Breakfast = true;
    this.Lunch = false;
    this.items = [{
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      custom: true
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      custom: false
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      custom: false
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      custom: true
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      custom: false
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      custom: false
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13",
      custom: true
    }
  ]
  }

  custom() {
    this.navctrl.push(CustomItemPage);
  }
  breakfast() {
    this.Breakfast = false;
    this.Lunch = true;
  }
  lunch() {
    this.Lunch = true;
    this.Breakfast = false;
  }
}
