import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { IonicPageModule } from "ionic-angular";
import { SubmissionPage } from "./submission";

@NgModule({
  declarations: [SubmissionPage],
  imports: [
    IonicPageModule.forChild(SubmissionPage),
    TranslateModule.forChild()
  ]
})
export class SubmissionPageModule {}
