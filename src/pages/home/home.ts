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
  greeting: string = "";
  location: string = "";
  temperature: string = "";
  userName: string = "";

  constructor(
    private readonly navCtrl: NavController,
    private readonly user: User,
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

  private getGreeting(key: string) {
    this.translate.get(key).subscribe((res: string) => {
      this.greeting = res;
    });
  }

  presentHelpModal() {
    console.log("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => console.log("Help Modal Displayed"))
      .catch((reason: any) => console.error(reason));
  }

  /**
   * Navigate to the EI Reporting feature.
   * Will send user to the login page if they aren't logged in
   */
  public navigateToEIReportingPage = () => {
    //If the user is not logged in redirect to EILogin Page
    if (this.user.isLoggedIn()) {
      this.navigateToPage(SitePages.EiReporting);
    } else {
      this.navigateToPage(SitePages.EILogin);
    }
  };

  public navigateToSearchPage = () => this.navigateToPage(SitePages.BlankPage);
  public navigateToMyNotificationsPage = () =>
    this.navigateToPage(SitePages.BlankPage);
  public navigateToBenefitFinderPage = () =>
    this.navigateToPage(SitePages.BlankPage);
  public navigateToSCCLocationPage = () =>
    this.navigateToPage(SitePages.BlankPage);
  public navigateToLifeEventsPage = () =>
    this.navigateToPage(SitePages.BlankPage);

  private readonly navigateToPage = (page: SitePages) => {
    this.navCtrl
      .push(page)
      .then(() => console.log("Navigating to : " + page.toString()))
      .catch((reason: any) => console.error(reason));
  };

  public ionViewDidLoad = () => console.log("Loading Home Page");
}
