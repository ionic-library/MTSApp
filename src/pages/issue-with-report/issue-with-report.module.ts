import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { IssueWithReportPage } from "./issue-with-report";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [IssueWithReportPage],
  imports: [
    IonicPageModule.forChild(IssueWithReportPage),
    TranslateModule.forChild()
  ]
})
export class IssueWithReportPageModule {}
