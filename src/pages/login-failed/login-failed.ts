import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SitePages } from "@pages";

import { Logger } from "winston";
import { LogProvider } from "@providers";
/**
 * Generated class for the LoginFailedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login-failed",
  templateUrl: "login-failed.html"
})
export class LoginFailedPage {
  private readonly logger: Logger;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad LoginFailedPage");
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
