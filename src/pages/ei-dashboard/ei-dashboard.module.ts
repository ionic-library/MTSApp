import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EiDashboardPage } from "./ei-dashboard";
import { TranslateModule } from "@ngx-translate/core";
import { StatusCardComponent } from "@components";
import { RoundProgressModule } from "angular-svg-round-progressbar";

@NgModule({
  declarations: [EiDashboardPage, StatusCardComponent],
  imports: [
    IonicPageModule.forChild(EiDashboardPage),
    TranslateModule.forChild(),
    RoundProgressModule
  ]
})
export class EiDashboardPageModule {}
