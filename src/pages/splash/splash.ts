import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { User, LangCodes, LogProvider } from "@providers";
import { SitePages } from "@pages";

import { Logger } from "winston";

@IonicPage()
@Component({
  selector: "page-splash",
  templateUrl: "splash.html"
})
export class SplashPage {
  private readonly logger: Logger;
  public show: boolean = false;

  constructor(
    public navCtrl: NavController,
    public user: User,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
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
                  .then(() => this.logger.info("EULA set. Navigating home"))
                  .catch((reason: any) =>
                    this.logger.error(
                      "Could not navigate home: " + JSON.stringify(reason)
                    )
                  );
              } else {
                this.navCtrl
                  .push(SitePages.eula)
                  .then(() =>
                    this.logger.info("EULA not set. Navigating to EULA page.")
                  )
                  .catch((reason: any) =>
                    this.logger.error(
                      "Could not navigate to EULA: " + JSON.stringify(reason)
                    )
                  );
              }
            },
            (Error: any) => {
              this.logger.error(
                "Could not get EULA val: " + JSON.stringify(Error)
              );
            }
          );
        }
      },
      (Error: string) => {
        this.logger.error("Error getting language: " + JSON.stringify(Error));
      }
    );
  }

  public setLang(lang: LangCodes) {
    this.user.setLang(
      lang,
      () => {
        this.navCtrl
          .push(SitePages.eula)
          .then(() => this.logger.info("Navigating to " + SitePages.eula))
          .catch((reason: any) => this.logger.error(reason));
      },
      (reason: any) => {
        this.logger.error("Could not set lang: " + JSON.stringify(reason));
      }
    );
  }
}
