import { NgModule } from '@angular/core';
import { ChoosesComponent } from './chooses/chooses';
import { HotelItemsComponent } from './hotel-items/hotel-items';
@NgModule({
	declarations: [ChoosesComponent,
    HotelItemsComponent],
	imports: [],
	exports: [ChoosesComponent,
    HotelItemsComponent]
})
export class ComponentsModule {}
