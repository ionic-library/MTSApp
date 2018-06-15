import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavParams,
  ModalController,
  NavController
} from "ionic-angular";
import { SitePages } from "../index";

@IonicPage()
@Component({
  selector: "page-questionaire-2",
  templateUrl: "questionaire-2.html"
})
export class Questionaire_2Page {
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
    public modalCtrl: ModalController
  ) {
    this.startDate = "March 28, 2010";
    this.endDate = "April 10, 2010";
    this.pushPagePrevious = SitePages.Questionaire;
    this.pushPageNext = SitePages.Questionaire3;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad QuestionairePage");
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
