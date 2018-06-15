import { NgModule } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { createTranslateLoader } from "../../app/app.module";
import { IonicPageModule } from "ionic-angular";

import { SettingsPage } from "./settings";

@NgModule({
  declarations: [SettingsPage],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [SettingsPage]
})
export class SettingsPageModule {}
