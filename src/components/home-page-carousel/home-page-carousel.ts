import { Component, ViewChild } from "@angular/core";
import { User } from "./../../providers/user/user";
import { SitePages } from "../../pages/index";
import { NavController, Slides } from "ionic-angular";

/**
 * Generated class for the HomePageCarouselComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "home-page-carousel",
  templateUrl: "home-page-carousel.html"
})
export class HomePageCarouselComponent {
  constructor(private navCtrl: NavController, private user: User) {}

  :/* tslint:disable:no-initializer */
  @ViewChild("slides") slides: Slides;

  prevSlide() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }

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
    this.navCtrl.push(SitePages.BlankPage);
  public navigateToLifeEventsPage = () =>
    this.navCtrl.push(SitePages.BlankPage);
}
