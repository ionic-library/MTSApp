import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyNotificationsPage } from './mynotifications';

@NgModule({
  declarations: [
    MyNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyNotificationsPage),
  ],
})
export class MynotificationsPageModule {}
