import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TranslateModule } from "@ngx-translate/core";
import { EiReportingPage } from "./ei-reporting";
import { EiReportsListComponent } from "@components";

@NgModule({
  declarations: [EiReportingPage, EiReportsListComponent],
  imports: [
    IonicPageModule.forChild(EiReportingPage),
    TranslateModule.forChild()
  ]
})
export class EiReportingPageModule {}
