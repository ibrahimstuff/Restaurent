import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QrCodePage } from './hotel-choose';


@NgModule({
  declarations: [
    QrCodePage,
  ],
  imports: [
    IonicPageModule.forChild(QrCodePage),
  ],
})
export class QrCodePageModule {}
