import { SitePages } from "..";
import { TranslateService } from "@ngx-translate/core";
import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-confirmation",
  templateUrl: "confirmation.html"
})
export class ConfirmationPage {
  constructor(
    private readonly navCtrl: NavController,
    public modalCtrl: ModalController,
    public translate: TranslateService
  ) {}

  presentHelpModal() {
    console.log("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => console.log("Help Modal Displayed"))
      .catch((reason: any) => console.error(reason));
  }

  navigateEiDashboard = () => {
    this.navCtrl
      .setRoot(SitePages.EiReporting)
      .then(() => console.log("Setting Root to " + SitePages.EiReporting))
      .catch((reason: any) => console.log(reason));

    this.navCtrl
      .popToRoot()
      .then(() => console.log("navigating to Root"))
      .catch((reason: any) => console.log(reason));
  };

  ionViewDidLoad = () => console.log("Loadded ConfirmationPage");
}
