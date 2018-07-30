import { Component, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  AlertController,
  Navbar,
  Platform
} from "ionic-angular";
import { SitePages } from "@pages";

import { Logger } from "winston";
import { LogProvider } from "@providers";
@IonicPage()
@Component({
  selector: "page-questionaire-7",
  templateUrl: "questionaire-7.html"
})
export class Questionaire_7Page {
  private readonly logger: Logger;
  pushPagePrevious: any;
  pushPageNext: any;
  startDate: any;
  endDate: any;
  allowedToLeave: boolean = false;

  viewRegEx = new RegExp("^QuestionaireS*");

  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public platform: Platform,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.startDate = "March 28, 2010";
    this.endDate = "April 10, 2010";
    this.pushPagePrevious = SitePages.Questionaire6;
    this.pushPageNext = SitePages.Submission;
  }

  // Reference Navbar Back button and Override navCtrl.pop() to set Nav Guard flag to TRUE
  @ViewChild(Navbar) navBar: Navbar;
  // After page loads, set back button override
  ionViewDidEnter() {
    const activeView = this.navCtrl.getActive();
    const previousView = this.navCtrl.getPrevious(activeView);
    if (this.viewRegEx.test(previousView.component.name)) {
      this.allowedToLeave = true;
    } else {
      this.allowedToLeave = false;
    }
    this.setBackButtonAction();
    // Register override for Android hardware back button
    this.platform.registerBackButtonAction(() => {
      this.navCtrl.pop().catch((reason: any) => this.logger.error(reason));
    });
  }
  // Navbar Back button override
  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
      this.navCtrl.pop().catch((reason: any) => this.logger.error(reason));
    };
  }
  // Nav Guard
  ionViewCanLeave() {
    if (!this.allowedToLeave) {
      return new Promise<any>((resolve, reject) => {
        const alert = this.alertCtrl.create({
          title: "Are you sure you want to leave this page?",
          message: "Current progress will be lost.",
          buttons: [
            {
              text: "Cancel",
              role: "cancel",
              handler: () => {
                alert
                  .dismiss()
                  .then(reject)
                  .catch((reason: any) => this.logger.error(reason));
                return false;
              }
            },
            {
              text: "Continue",
              handler: () => {
                alert
                  .dismiss()
                  .then(resolve)
                  .catch((reason: any) => this.logger.error(reason));
                return false;
              }
            }
          ]
        });
        alert.present().catch((reason: any) => this.logger.error(reason));
      });
    } else {
      this.allowedToLeave = false;
      return true;
    }
  }

  nextQuestion() {
    this.allowedToLeave = true;
    this.navCtrl
      .push(this.pushPageNext)
      .then(() => this.logger.info("Navigating to : Next question..."))
      .catch((reason: any) => this.logger.error(reason));
  }

  previousQuestion() {
    this.allowedToLeave = true;
    this.navCtrl
      .push(this.pushPagePrevious)
      .then(() => this.logger.info("Navigating to : Previous question..."))
      .catch((reason: any) => this.logger.error(reason));
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
