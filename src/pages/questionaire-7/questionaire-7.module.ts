import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Questionaire_7Page } from './questionaire-7';

@NgModule({
  declarations: [
    Questionaire_7Page,
  ],
  imports: [
    IonicPageModule.forChild(Questionaire_7Page),
    TranslateModule.forChild()
  ],
})
export class Questionaire_7PageModule {}
