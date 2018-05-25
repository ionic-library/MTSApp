import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { SitePages } from "../index";
import { HelpModalPage } from "../help-modal/help-modal";

/**
 * Home page where user selects services from an
 * icon grid.
 */
@IonicPage()
@Component({
  selector: "page-home",
  templateUrl: "home.html"
})

export class HomePage {
  logController;

  constructor(private navCtrl: NavController,
    public modalCtrl: ModalController) {

  }

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

  public navigateToEIReportingPage = () => this.navCtrl.push(SitePages.EILogin);
  public navigateToSearchPage = () => this.navCtrl.push(SitePages.JobSearch);
  public navigateToMyNotificationsPage = () => this.navCtrl.push(SitePages.MyNotifications);
  public navigateToBenefitFinderPage = () => this.navCtrl.push(SitePages.BenefitFinder);
  public navigateToSCCLocationPage = () => this.navCtrl.push(SitePages.SCCLocations);
  public navigateToLifeEventsPage = () => this.navCtrl.push(SitePages.LifeEvents);

  public ionViewDidLoad = () => console.log("Loading Home Page");


}
