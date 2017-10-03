import { Component } from '@angular/core';

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

  constructor() {
    this.items = [{
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13"
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13"
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13"
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13"
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13"
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13"
    },
    {
      img: "assets/img/burger.png",
      name: "Mutton Fried Burger",
      price: "13"
    }
  ]
  }

}
