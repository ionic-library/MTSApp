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
  constructor(
    private readonly navCtrl: NavController,
    private readonly user: User
  ) {}

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
}
