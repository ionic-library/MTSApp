import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Questionaire_3Page } from './questionaire-3';

@NgModule({
  declarations: [
    Questionaire_3Page,
  ],
  imports: [
    IonicPageModule.forChild(Questionaire_3Page),
    TranslateModule.forChild()
  ],
})
export class Questionaire_3PageModule {}
