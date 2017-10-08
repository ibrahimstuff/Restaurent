import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BreadPage } from './bread';

@NgModule({
  declarations: [
    BreadPage,
  ],
  imports: [
    IonicPageModule.forChild(BreadPage),
  ],
})
export class BreadPageModule {}
