import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EiDashboardPage } from "./ei-dashboard";
import { TranslateModule } from "@ngx-translate/core";
import { StatusCardComponent } from "@components";

@NgModule({
  declarations: [EiDashboardPage, StatusCardComponent],
  imports: [
    IonicPageModule.forChild(EiDashboardPage),
    TranslateModule.forChild()
  ]
})
export class EiDashboardPageModule {}
