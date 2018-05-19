import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SccLocationsPage } from './scc-locations';

@NgModule({
  declarations: [
    SccLocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(SccLocationsPage),
  ],
})
export class SccLocationsPageModule {}
