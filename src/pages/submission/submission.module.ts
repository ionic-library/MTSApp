import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { SubmissionPage } from "./submission";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [SubmissionPage],
  imports: [
    IonicPageModule.forChild(SubmissionPage),
    TranslateModule.forChild()
  ]
})
export class SubmissionPageModule {}
