import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { SitePages } from "../../pages";
import { Logger } from "winston";
import { User, LogProvider } from "../../providers";

@IonicPage()
@Component({
  selector: "page-eula",
  templateUrl: "eula.html"
})
export class EulaPage {
  private readonly logger: Logger;

  constructor(
    public navCtrl: NavController,
    public user: User,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad EulaPage");
  }

  public setEula() {
    this.user.setEulaAgreed(
      () => {
        this.navCtrl
          .push(SitePages.Home)
          .then(() =>
            this.logger.info("EULA set. Navigating to " + SitePages.Home)
          )
          .catch((reason: any) =>
            this.logger.error(
              "Could not redirect to home after EULA: " + JSON.stringify(reason)
            )
          );
      },
      (reason: any) => {
        this.logger.error("Could not set EULA: " + JSON.stringify(reason));
      }
    );
  }
}
