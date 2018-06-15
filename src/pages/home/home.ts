import { User } from "./../../providers/user/user";
import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { SitePages } from "../index";
import { TranslateService } from "@ngx-translate/core";

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

  greeting: string;
  location: string;
  temperature: string;
  userName: string;

  constructor(
    private navCtrl: NavController,
    private user: User,
    public modalCtrl: ModalController,
    public translate: TranslateService
  ) {
    this.getGreeting("GREETING_MORNING");
    this.getLocation();
    this.getTemperature();
    this.getUserName();
  }

  private getLocation() {
    this.location = "Ottawa, On";
  }

  private getTemperature() {
    this.temperature = "-2";
  }

  private getUserName() {
    this.userName = "Firstname Lastname";
  }

  private getGreeting(key) {
    this.translate.get(key).subscribe((res: string) => {
      this.greeting = res;
    });
  }

  presentHelpModal() {
    console.log("Click Received");
    let helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal.present();
  }

  /**
   * Navigate to the EI Reporting feature.
   * Will send user to the login page if they aren't logged in
   */
  public navigateToEIReportingPage = () => {
    //If the user is not logged in redirect to EILogin Page
    if (this.user.isLoggedIn()) {
      this.navCtrl.push(SitePages.EiReporting);
    } else {
      this.navCtrl.push(SitePages.EILogin);
    }
  };

  public navigateToSearchPage = () => this.navCtrl.push(SitePages.BlankPage);
  public navigateToMyNotificationsPage = () =>
    this.navCtrl.push(SitePages.BlankPage);
  public navigateToBenefitFinderPage = () =>
    this.navCtrl.push(SitePages.BlankPage);
  public navigateToSCCLocationPage = () =>
    this.navCtrl.push(SitePages.Locations);
  public navigateToLifeEventsPage = () =>
    this.navCtrl.push(SitePages.BlankPage);

  public ionViewDidLoad = () => console.log("Loading Home Page");
}
