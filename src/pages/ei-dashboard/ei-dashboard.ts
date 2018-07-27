import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { TranslateService } from "../../../node_modules/@ngx-translate/core";
import { Logger } from "winston";
import { LogProvider } from "@providers";
import { SitePages } from "@pages";

/**
 * Generated class for the EiDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ei-dashboard",
  templateUrl: "ei-dashboard.html"
})
export class EiDashboardPage {
  private readonly logger: Logger;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    public translate: TranslateService,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad EiDashboardPage");
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
