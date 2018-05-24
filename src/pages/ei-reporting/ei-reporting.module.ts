import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';
import { EiReportingPage } from './ei-reporting';

@NgModule({
  declarations: [
    EiReportingPage
  ],
  imports: [
    IonicPageModule.forChild(EiReportingPage),
    TranslateModule.forChild()
  ],
})
export class EiReportingPageModule {}
