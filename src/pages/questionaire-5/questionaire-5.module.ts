import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { Questionaire_5Page } from './questionaire-5';

@NgModule({
  declarations: [
    Questionaire_5Page,
  ],
  imports: [
    IonicPageModule.forChild(Questionaire_5Page),
    TranslateModule.forChild()
  ],
})
export class Questionaire_5PageModule {}
