import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { MyNotificationsPage } from './mynotifications';

@NgModule({
  declarations: [
    MyNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyNotificationsPage),
    TranslateModule.forChild()
  ],
})
export class MynotificationsPageModule {}
