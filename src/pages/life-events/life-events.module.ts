import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeEventsPage } from './life-events';

@NgModule({
  declarations: [
    LifeEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(LifeEventsPage),
  ],
})
export class LifeEventsPageModule {}
