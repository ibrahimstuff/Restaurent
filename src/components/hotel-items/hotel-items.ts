import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  Dinner: boolean;
  Snacks: boolean;


  constructor(private navctrl: NavController) {
    this.Breakfast = true;
    this.Lunch = false;
    this.Dinner = false;
    this.Snacks = false;
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
  ];
  
  }
 
  custom() {
    this.navctrl.push(CustomItemPage);
  }
  breakfast() {
    this.Breakfast = true;
    this.Lunch = false;
    this.Dinner = false;
    this.Snacks = false;
  }
  lunch() {
    this.Lunch = true;
    this.Breakfast = false;
    this.Dinner = false;
    this.Snacks = false;
  }
  dinner() {
     this.Dinner = true;
     this.Breakfast = false;
     this.Lunch = false;
     this.Snacks = false;
  }
  snacks() {
    this.Snacks = true;
    this.Lunch = false;
    this.Breakfast = false;
    this.Dinner = false;
  }
}
