import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { ConfirmationPage } from './confirmation';

@NgModule({
  declarations: [
    ConfirmationPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationPage),
    TranslateModule.forChild()
  ],
  exports: [
    ConfirmationPage
  ]
})
export class ConfirmationPageModule { }
