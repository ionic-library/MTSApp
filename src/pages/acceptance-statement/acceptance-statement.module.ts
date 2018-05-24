import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core'
import { AcceptanceStatementPage } from './acceptance-statement';

@NgModule({
  declarations: [
    AcceptanceStatementPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptanceStatementPage),
    TranslateModule.forChild()
  ],
})
export class AcceptanceStatementPageModule {}
