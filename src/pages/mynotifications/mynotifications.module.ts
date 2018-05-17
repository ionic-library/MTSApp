import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MynotificationsPage } from './mynotifications';

@NgModule({
  declarations: [
    MynotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(MynotificationsPage),
  ],
})
export class MynotificationsPageModule {}
