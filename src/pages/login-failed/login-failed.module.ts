import { NgModule } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { LoginFailedPage } from "./login-failed";
import { TranslateModule } from "../../../node_modules/@ngx-translate/core";

@NgModule({
  declarations: [LoginFailedPage],
  imports: [
    IonicPageModule.forChild(LoginFailedPage),
    TranslateModule.forChild()
  ]
})
export class LoginFailedPageModule {}
