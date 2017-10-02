import { Component, EventEmitter } from '@angular/core';

/**
 * Generated class for the ChoosesComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chooses',
  templateUrl: 'chooses.html',
  outputs: ['Booking']
})
export class ChoosesComponent {

  text: string;

  constructor() {
    console.log('Hello ChoosesComponent Component');
    this.text = 'Hello World';
  }
  dineIn = true;
  Booking = new EventEmitter<boolean>();


  ionViewDidLoad() {
    console.log('ionViewDidLoad QrCodePage');
  }
  onChange(value: boolean) {
    this.Booking.emit(value);
  }

}
