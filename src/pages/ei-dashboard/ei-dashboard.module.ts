import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { EiDashboardPage } from "./ei-dashboard";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [EiDashboardPage],
  imports: [
    IonicPageModule.forChild(EiDashboardPage),
    TranslateModule.forChild()
  ]
})
export class EiDashboardPageModule {}
