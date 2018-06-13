import { HomePage } from "./../home/home";
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
    private navCtrl: NavController,
    public modalCtrl: ModalController,
    public translate: TranslateService
  ) {}

  presentHelpModal() {
    console.log("Click Received");
    let helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal.present();
  }

  navigateEiDashboard = () => {
    this.navCtrl.setRoot(SitePages.EiReporting);
    this.navCtrl.popToRoot();
  };

  ionViewDidLoad = () => console.log("Loadded ConfirmationPage");
}
