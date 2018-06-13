import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TranslateModule } from "@ngx-translate/core";
import { HelpModalPage } from "./help-modal";

@NgModule({
  declarations: [HelpModalPage],
  imports: [IonicPageModule.forChild(HelpModalPage), TranslateModule.forChild()]
})
export class HelpModalPageModule {}
