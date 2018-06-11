import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { ConfirmationPage } from "../confirmation/confirmation";
import { SitePages } from "../index";
import { TranslateService } from "@ngx-translate/core";
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
    this.navCtrl.push(SitePages.Questionaire2);
  }
  public editQuestion3() {
    this.navCtrl.push(SitePages.Questionaire3);
  }
  public editQuestion5() {
    this.navCtrl.push(SitePages.Questionaire5);
  }
  public editQuestion6() {
    this.navCtrl.push(SitePages.Questionaire6);
  }
  public editQuestion7() {
    this.navCtrl.push(SitePages.Questionaire7);
  }

  public backToEIReporting() {
    this.navCtrl.push(SitePages.EiReporting);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SubmissionPage");
  }
}
