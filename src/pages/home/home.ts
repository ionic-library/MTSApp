import { User, LogProvider } from "@providers";
import { Logger } from "winston";
import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { SitePages } from "@pages";
import { TranslateService } from "@ngx-translate/core";
import { StatusBar } from "../../../node_modules/@ionic-native/status-bar";

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
  private readonly logger: Logger;

  constructor(
    private readonly navCtrl: NavController,
    private readonly user: User,
    public modalCtrl: ModalController,
    private readonly statusBar: StatusBar,
    public translate: TranslateService,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.getGreeting("GREETING_MORNING");
    this.getLocation();
    this.getTemperature();
    this.getUserName();
    this.statusBar.overlaysWebView(false);
    // this.statusBar.backgroundColorByName('black');
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
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
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
    this.navigateToPage(SitePages.Locations);
  public navigateToLifeEventsPage = () =>
    this.navigateToPage(SitePages.BlankPage);

  private readonly navigateToPage = (page: SitePages) => {
    this.navCtrl
      .push(page)
      .then(() => this.logger.info("Navigating to : " + page.toString()))
      .catch((reason: any) => this.logger.error(reason));
  };

  public ionViewDidLoad = () => this.logger.info("Loading Home Page");
}
