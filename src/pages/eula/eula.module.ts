import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { TranslateModule } from "@ngx-translate/core";
import { EulaPage } from "./eula";

@NgModule({
  declarations: [EulaPage],
  imports: [IonicPageModule.forChild(EulaPage), TranslateModule.forChild()]
})
export class EulaPageModule {}
