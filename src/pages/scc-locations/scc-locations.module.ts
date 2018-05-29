import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { SccLocationsPage } from './scc-locations';

@NgModule({
  declarations: [
    SccLocationsPage,
  ],
  imports: [
    IonicPageModule.forChild(SccLocationsPage),
    TranslateModule.forChild()
  ],
})
export class SccLocationsPageModule {}
