import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Questionaire_6Page } from './questionaire-6';

@NgModule({
  declarations: [
    Questionaire_6Page,
  ],
  imports: [
    IonicPageModule.forChild(Questionaire_6Page),
    TranslateModule.forChild()
  ],
})
export class Questionaire_6PageModule {}
