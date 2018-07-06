import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SitePages } from "../index";

import { Logger } from "winston";
import { LogProvider } from "../../providers";
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

  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
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
