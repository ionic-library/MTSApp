import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { Reports } from "@mock-providers";
import { Report } from "@models";
import { SitePages } from "@pages";
import { Logger } from "winston";
import { LogProvider, User } from "@providers";

/**
 * Generated class for the EiReportingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ei-reporting",
  templateUrl: "ei-reporting.html"
})
export class EiReportingPage {
  private readonly logger: Logger;
  constructor(
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider,
    public readonly user: User
  ) {
    this.logger = this.logProvider.getLogger();
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad EiReportingPage");
  }

  presentHelpModal() {
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
  }
}
