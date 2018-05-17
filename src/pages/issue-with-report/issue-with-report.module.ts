import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IssueWithReportPage } from './issue-with-report';

@NgModule({
  declarations: [
    IssueWithReportPage,
  ],
  imports: [
    IonicPageModule.forChild(IssueWithReportPage),
  ],
})
export class IssueWithReportPageModule {}
