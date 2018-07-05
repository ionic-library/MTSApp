import { SitePages } from "..";
import { TranslateService } from "@ngx-translate/core";
import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { Logger } from "winston";
import { LogProvider } from "../../providers";

@IonicPage()
@Component({
  selector: "page-confirmation",
  templateUrl: "confirmation.html"
})
export class ConfirmationPage {
  private readonly logger: Logger;

  constructor(
    private readonly navCtrl: NavController,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  presentHelpModal() {
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
  }

  navigateEiDashboard = () => {
    this.navCtrl
      .setRoot(SitePages.EiReporting)
      .then(() => this.logger.info("Setting Root to " + SitePages.EiReporting))
      .catch((reason: any) => this.logger.info(reason));

    this.navCtrl
      .popToRoot()
      .then(() => this.logger.info("navigating to Root"))
      .catch((reason: any) => this.logger.info(reason));
  };

  ionViewDidLoad = () => this.logger.info("Loadded ConfirmationPage");
}
