import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { SitePages } from "../index";

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

  constructor(private navCtrl: NavController) {}

  public navigateToEIReportingPage = () => this.navCtrl.push(SitePages.EiReporting);
  public navigateToSearchPage = () => this.navCtrl.push(SitePages.JobSearch);
  public navigateToMynotificationsPage = () => this.navCtrl.push(SitePages.MyNotifications);
  public navigateToBenefitFinderPage = () => this.navCtrl.push(SitePages.BenefitFinder);
  public navigateToSCCLocationPage = () => this.navCtrl.push(SitePages.SCCLocations);
  public navigateToLifeEventsPage = () => this.navCtrl.push(SitePages.LifeEvents);

  public ionViewDidLoad = () => console.log("Loading Home Page");

}
