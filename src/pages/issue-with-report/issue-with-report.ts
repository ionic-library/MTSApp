import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { SitePages } from "..";

/**
 * Generated class for the IssueWithReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-issue-with-report",
  templateUrl: "issue-with-report.html"
})
export class IssueWithReportPage {
  constructor(
    public modalCtrl: ModalController,
    public translate: TranslateService
  ) {}

  presentHelpModal() {
    console.log("Click Received");
    let helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal.present();
  }

  ionViewDidLoad = () => console.log("ionViewDidLoad IssueWithReportPage");
}
