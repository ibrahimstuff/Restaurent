import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomItemPage } from './custom-item';

@NgModule({
  declarations: [
    CustomItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomItemPage),
  ],
})
export class CustomItemPageModule {}
