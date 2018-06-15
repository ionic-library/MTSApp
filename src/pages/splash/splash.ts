import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { User, LangCodes } from "../../providers";
import { SitePages } from "../../pages";

@IonicPage()
@Component({
  selector: "page-splash",
  templateUrl: "splash.html"
})
export class SplashPage {
  public show: boolean = false;

  constructor(public navCtrl: NavController, public user: User) {
    this.user.GetLang(
      (val: string) => {
        if (typeof val == "undefined") {
          console.log("Lang is not set");
          this.show = true;
        } else {
          console.log("lang is set: " + val.toString());
          this.navCtrl
            .push(SitePages.Home)
            .then(() => console.log("navigating home"))
            .catch((reason: any) => console.error(reason));
        }
      },
      (val: string) => {
        console.log("Error getting language: " + val);
      }
    );
  }

  public setLang(lang: LangCodes) {
    this.user.setLang(
      lang,
      () => {
        this.navCtrl
          .push(SitePages.Home)
          .then(() => console.log("Navigating to " + SitePages.Home))
          .catch((reason: any) => console.error(reason));
      },
      (reason: any) => {
        console.error("Could not set lang: " + JSON.stringify(reason));
      }
    );
  }
}
