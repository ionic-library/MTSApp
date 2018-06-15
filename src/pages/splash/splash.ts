import { Component } from "@angular/core";
import { IonicPage, NavController  } from "ionic-angular";
import {  User, LangCodes } from "../../providers";
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
          console.log("lang is set: " + val);
          this.navCtrl.push(SitePages.Home)
                      .then(() => console.log("navigating home"))
                      .catch((reason : any) => console.error(reason));
        }
      },
      (val : string) => { console.log("Error getting language: " + val); }
    );
  }

  public setEnglish() {
    this.user.setLang(
      LangCodes.EN,
      () => {
        location.reload();
      },
      (val : any) => {
        console.error("Could not set as English: " + JSON.stringify(val));
      }
    );
  }

  public setFrench() {
    this.user.setLang(
      LangCodes.FR,
      () => {
        location.reload();
      },
      (val : any) => {
        console.error("Could not set as French: " + JSON.stringify(val));
      }
    );
  }
}
