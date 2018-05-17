import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionairePage } from './questionaire';

@NgModule({
  declarations: [
    QuestionairePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionairePage),
    TranslateModule.forChild()
  ],
})
export class QuestionairePageModule {}
