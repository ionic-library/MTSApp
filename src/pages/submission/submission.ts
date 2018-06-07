import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { ConfirmationPage } from "../confirmation/confirmation";
import { SitePages } from "../index";
import { TranslateService } from "@ngx-translate/core";
import { Questionaire_2Page } from "../questionaire-2/questionaire-2";
import { Questionaire_3Page } from "../questionaire-3/questionaire-3";
import { Questionaire_5Page } from "../questionaire-5/questionaire-5";
import { Questionaire_6Page } from "../questionaire-6/questionaire-6";
import { Questionaire_7Page } from "../questionaire-7/questionaire-7";
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
  constructor(
    public navCtrl: NavController,
    public translateService: TranslateService
  ) {}

  goToConfirmation() {
    this.navCtrl.push(SitePages.Confirmation);
  }

  public editQuestion1() {
    this.navCtrl.push(SitePages.Questionaire);
  }
  public editQuestion2() {
    this.navCtrl.push(Questionaire_2Page);
  }
  public editQuestion3() {
    this.navCtrl.push(Questionaire_3Page);
  }
  public editQuestion5() {
    this.navCtrl.push(Questionaire_5Page);
  }
  public editQuestion6() {
    this.navCtrl.push(Questionaire_6Page);
  }
  public editQuestion7() {
    this.navCtrl.push(Questionaire_7Page);
  }

  public backToEIReporting() {
    this.navCtrl.push(SitePages.EiReporting);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SubmissionPage");
  }
}
