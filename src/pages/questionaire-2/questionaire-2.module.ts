import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Questionaire_2Page } from './questionaire-2';

@NgModule({
  declarations: [
    Questionaire_2Page,
  ],
  imports: [
    IonicPageModule.forChild(Questionaire_2Page),
    TranslateModule.forChild()
  ],
})
export class Questionaire_2PageModule {}
