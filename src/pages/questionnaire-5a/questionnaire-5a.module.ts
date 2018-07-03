import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { IonicPageModule } from "ionic-angular";
import { Questionnaire_5aPage } from "./questionnaire-5a";

@NgModule({
  declarations: [Questionnaire_5aPage],
  imports: [
    IonicPageModule.forChild(Questionnaire_5aPage),
    TranslateModule.forChild()
  ]
})
export class Questionnaire_5aPageModule {}
