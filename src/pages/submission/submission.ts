import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController } from "ionic-angular";
import { SitePages } from "../index";
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

  goToConfirmation = () =>  this.navigateToPage(SitePages.Confirmation);
  editQuestion1 = () => this.navigateToPage(SitePages.Questionaire);
  editQuestion2 = () => this.navigateToPage(SitePages.Questionaire2);
  editQuestion3 = () => this.navigateToPage(SitePages.Questionaire3);
  editQuestion5 = () => this.navigateToPage(SitePages.Questionaire5);
  editQuestion6 = () => this.navigateToPage(SitePages.Questionaire6);
  editQuestion7 = () => this.navigateToPage(SitePages.Questionaire7);
  backToEIReporting = () => this.navigateToPage(SitePages.EiReporting);

  private navigateToPage(page : SitePages){
    this.navCtrl.push(page)
                .then(() => console.log("Navigating to page : " + page.toString()))
                .catch((reason: string) => console.log(reason))
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SubmissionPage");
  }
}
