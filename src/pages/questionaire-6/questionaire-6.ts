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
import { HelpModalPage } from "../help-modal/help-modal";
import { SitePages } from "../index";
@IonicPage()
@Component({
  selector: "page-questionaire-6",
  templateUrl: "questionaire-6.html"
})
export class Questionaire_6Page {
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
    this.pushPagePrevious = SitePages.Questionaire5;
    this.pushPageNext = SitePages.Questionaire7;
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
