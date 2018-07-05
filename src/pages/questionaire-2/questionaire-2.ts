import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavParams,
  ModalController,
  NavController
} from "ionic-angular";
import { SitePages } from "../index";

import { Logger } from "winston";
import { LogProvider } from "../../providers";
@IonicPage()
@Component({
  selector: "page-questionaire-2",
  templateUrl: "questionaire-2.html"
})
export class Questionaire_2Page {
  private readonly logger: Logger;
  //report: Report;
  //params: Object;
  pushPagePrevious: any;
  pushPageNext: any;
  startDate: any;
  endDate: any;
  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.startDate = "March 28, 2010";
    this.endDate = "April 10, 2010";
    this.pushPagePrevious = SitePages.Questionaire;
    this.pushPageNext = SitePages.Questionaire3;
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad QuestionairePage");
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
