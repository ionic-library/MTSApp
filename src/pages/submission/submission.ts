import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { SitePages } from "@pages";

import { Logger } from "winston";
import { LogProvider } from "@providers";
/**
 * Generated class for the SubmissionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-submission",
  templateUrl: "submission.html"
})
export class SubmissionPage {
  private readonly logger: Logger;
  readonly helpSelectionOptions = {
    confirmationStatement: {
      modalTitle: "CONFIRMATION_STATEMENT_MODAL_TITLE",
      sections: [
        {
          content: "CONFIRMATION_STATEMENT"
        }
      ]
    }
  };

  constructor(
    public navCtrl: NavController,
    public translateService: TranslateService,
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  goToConfirmation = () => this.navigateToPage(SitePages.Confirmation);
  editQuestion1 = () => this.navigateToPage(SitePages.Questionaire);
  editQuestion2 = () => this.navigateToPage(SitePages.Questionaire2);
  editQuestion3 = () => this.navigateToPage(SitePages.Questionaire3);
  editQuestion5 = () => this.navigateToPage(SitePages.Questionaire5);
  editQuestion6 = () => this.navigateToPage(SitePages.Questionaire6);
  editQuestion7 = () => this.navigateToPage(SitePages.Questionaire7);
  backToEIReporting = () => this.navigateToPage(SitePages.EiReporting);

  presentHelpModal(helpSelection) {
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal, helpSelection);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
  }

  private navigateToPage(page: SitePages) {
    this.navCtrl
      .push(page)
      .then(() => this.logger.info("Navigating to page : " + page.toString()))
      .catch((reason: string) => this.logger.info(reason));
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad SubmissionPage");
  }
}
