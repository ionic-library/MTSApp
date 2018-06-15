import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SitePages } from "..";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginFailedPage");
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
