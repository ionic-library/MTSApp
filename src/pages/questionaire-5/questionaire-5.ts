import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  ToastController,
  NavParams,
  ModalController
} from "ionic-angular";
import { Report } from "../../models/mockEiReport";
import { Questionaire_3Page } from "../questionaire-3/questionaire-3";
import { Questionaire_6Page } from "../questionaire-6/questionaire-6";
import { HelpModalPage } from "../help-modal/help-modal";

@IonicPage()
@Component({
  selector: "page-questionaire-5",
  templateUrl: "questionaire-5.html"
})
export class Questionaire_5Page {
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
    //this.report = navParams.get('report');
    this.startDate = "March 28, 2010";
    this.endDate = "April 10, 2010";
    this.pushPagePrevious = Questionaire_3Page;
    this.pushPageNext = Questionaire_6Page;
    //this.params = { id: 42 };
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad QuestionairePage");
  }

  presentHelpModal() {
    console.log("Click Received");
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }
}
