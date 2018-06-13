import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Lang, User, LangCodes } from "../../providers";
import { SitePages } from "../../pages";

@IonicPage()
@Component({
  selector: "page-splash",
  templateUrl: "splash.html"
})
export class SplashPage {
  public show: boolean;
  constructor(public navCtrl: NavController, public user: User) {
    this.user.GetLang(
      val => {
        if (typeof val == "undefined") {
          // User lang is not set
          this.show = true;
        } else {
          // user lang is set
          this.navCtrl.push(SitePages.Home);
        }
      },
      val => {
        // NOT GOOD
        console.log("Error getting language: " + val);
      }
    );
  }

  public setEnglish() {
    this.user.setLang(
      LangCodes.EN,
      () => {
        location.reload();
      },
      val => {
        console.log("Could not set as English: " + val);
      }
    );
  }

  public setFrench() {
    this.user.setLang(
      LangCodes.FR,
      () => {
        location.reload();
      },
      val => {
        console.log("Could not set as French: " + val);
      }
    );
  }
}
