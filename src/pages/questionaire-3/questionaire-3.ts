import { Component, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  AlertController,
  Navbar
} from "ionic-angular";
import { SitePages } from "@pages";

import { Logger } from "winston";
import { LogProvider } from "@providers";
@IonicPage()
@Component({
  selector: "page-questionaire-3",
  templateUrl: "questionaire-3.html"
})
export class Questionaire_3Page {
  private readonly logger: Logger;
  //report: Report;
  //params: Object;
  pushPagePrevious: any;
  pushPageNext: any;
  startDate: any;
  endDate: any;
  allowedToLeave: boolean = false;

  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private readonly logProvider: LogProvider
  ) {
    //this.report = navParams.get('report');
    this.logger = this.logProvider.getLogger();
    this.startDate = "March 28, 2010";
    this.endDate = "April 10, 2010";
    this.pushPagePrevious = SitePages.Questionaire2;
    this.pushPageNext = SitePages.Questionaire5;
    //this.params = { id: 42 };
  }

  // Reference Navbar Back button and Override navCtrl.pop() to set Nav Guard flag to TRUE
  @ViewChild(Navbar) navBar: Navbar;
  // After page loads, set back button override
  ionViewDidLoad() {
    this.setBackButtonAction();
  }
  // Navbar Back button override
  setBackButtonAction() {
    this.navBar.backButtonClick = () => {
      this.allowedToLeave = true;
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
