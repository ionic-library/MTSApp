import { Component } from '@angular/core';
import { User } from './../../providers/user/user';
import { SitePages } from "../../pages/index";
import { NavController } from "ionic-angular";

/**
 * Generated class for the HomePageCarouselComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'home-page-carousel',
  templateUrl: 'home-page-carousel.html'
})
export class HomePageCarouselComponent {

  text: string;

  constructor(private navCtrl: NavController,
              private user: User) { }

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

}
