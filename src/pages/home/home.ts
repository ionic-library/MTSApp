import { User } from './../../providers/user/user';
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
              private user : User,
              public modalCtrl: ModalController) {

  }

  presentHelpModal() {
    console.log('Click Received');
    let helpModal = this.modalCtrl.create(HelpModalPage);
    helpModal.present();
  }

  /**
   * Navigate to the EI Reporting feature.
   * Will send user to the login page if they aren't logged in
   */
  public navigateToEIReportingPage = () => {
    //If the user is not logged in redirect to EILogin Page
   if(this.user.isLoggedIn()){
    this.navCtrl.push(SitePages.EiReporting);
   }else{
    this.navCtrl.push(SitePages.EILogin);
   }
  }

  public navigateToSearchPage = () => this.navCtrl.push(SitePages.JobSearch);
  public navigateToMyNotificationsPage = () => this.navCtrl.push(SitePages.MyNotifications);
  public navigateToBenefitFinderPage = () => this.navCtrl.push(SitePages.BenefitFinder);
  public navigateToSCCLocationPage = () => this.navCtrl.push(SitePages.SCCLocations);
  public navigateToLifeEventsPage = () => this.navCtrl.push(SitePages.LifeEvents);

  public ionViewDidLoad = () => console.log("Loading Home Page");


}
