import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { LifeEventsPage } from './life-events';

@NgModule({
  declarations: [
    LifeEventsPage,
  ],
  imports: [
    IonicPageModule.forChild(LifeEventsPage),
    TranslateModule.forChild()
  ],
})
export class LifeEventsPageModule {}
