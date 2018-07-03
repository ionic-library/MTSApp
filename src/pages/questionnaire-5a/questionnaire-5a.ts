import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SitePages } from "../index";

@IonicPage()
@Component({
  selector: "page-questionnaire-5a",
  templateUrl: "questionnaire-5a.html"
})
export class Questionnaire_5aPage {
  pushPagePrevious: any;
  pushPageNext: any;
  startDate: any;
  endDate: any;
  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {
    this.startDate = "March 28, 2010";
    this.endDate = "April 10, 2010";
    this.pushPagePrevious = SitePages.Questionaire5;
    this.pushPageNext = SitePages.Questionnaire5b;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad Questionnaire_5aPage");
  }

  presentHelpModal() {
    console.log("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => console.log("Help Modal Displayed"))
      .catch((reason: any) => console.error(reason));
  }
}
