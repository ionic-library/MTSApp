import { Component } from "@angular/core";
import { IonicPage, ModalController } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { SitePages } from "@pages";
import { Logger } from "winston";
import { LogProvider } from "@providers";

/**
 * Generated class for the IssueWithReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-issue-with-report",
  templateUrl: "issue-with-report.html"
})
export class IssueWithReportPage {
  private readonly logger: Logger;
  constructor(
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

  ionViewDidLoad = () => this.logger.info("ionViewDidLoad IssueWithReportPage");
}
