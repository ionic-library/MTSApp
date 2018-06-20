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
      (_Lang: string) => {
        if (typeof _Lang == "undefined") {
          this.show = true;
        } else {
          this.user.isEulaAgreed(
            isAgreed => {
              if (isAgreed) {
                this.navCtrl
                  .push(SitePages.Home)
                  .then(() => console.log("EULA set. Navigating home"))
                  .catch((reason: any) =>
                    console.error(
                      "Could not navigate home: " + JSON.stringify(reason)
                    )
                  );
              } else {
                this.navCtrl
                  .push(SitePages.eula)
                  .then(() =>
                    console.log("EULA not set. Navigating to EULA page.")
                  )
                  .catch((reason: any) =>
                    console.error(
                      "Could not navigate to EULA: " + JSON.stringify(reason)
                    )
                  );
              }
            },
            (Error: any) => {
              console.error("Could not get EULA val: " + JSON.stringify(Error));
            }
          );
        }
      },
      (Error: string) => {
        console.error("Error getting language: " + JSON.stringify(Error));
      }
    );
  }

  public setLang(lang: LangCodes) {
    this.user.setLang(
      lang,
      () => {
        this.navCtrl
          .push(SitePages.eula)
          .then(() => console.log("Navigating to " + SitePages.eula))
          .catch((reason: any) => console.error(reason));
      },
      (reason: any) => {
        console.error("Could not set lang: " + JSON.stringify(reason));
      }
    );
  }
}
