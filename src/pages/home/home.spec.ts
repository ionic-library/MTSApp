import { HomePageCarouselComponent } from "./../../components/home-page-carousel/home-page-carousel";
import { CommonTestModule } from "./../../app/sharedModules";
import { HomePage } from "./home";
import { NavController } from "ionic-angular";
import { SitePages } from "..";
import { TestBed, async, inject } from "@angular/core/testing";
import { User } from "../../providers";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("The Home Page", () => {
  function setupTestBedConfig() {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([
        HomePage,
        HomePageCarouselComponent
      ]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: HomePage, useClass: HomePage }
      ])
    }).compileComponents();
  }

  beforeEach(async(() => {
    setupTestBedConfig();
  }));

  describe("itself", () => {
    it("Should be created with no errors", inject([HomePage], sut => {
      expect(sut).to.exist;
    }));
  });

  describe("Login Button", () => {
    it("Should navigate to the EI Dashboard Login Page when user is not logged in", inject(
      [NavController, User, HomePage],
      (navCtl, user, sut) => {
        const navSpy = sinon.spy(navCtl, "push");
        sinon.stub(user, "isLoggedIn").returns(false);

        sut.navigateToEIDashboardPage();

        expect(navSpy).to.have.been.calledWith(SitePages.EILogin);
      }
    ));

    it("Should navigate to the EI Dashboard Page when user is logged in", inject(
      [NavController, User, HomePage],
      (navCtl, user, sut) => {
        const navSpy = sinon.spy(navCtl, "push");
        sinon.stub(user, "isLoggedIn").returns(true);

        sut.navigateToEIDashboardPage();

        expect(navSpy).to.have.been.calledWith(SitePages.EiDashboard);
      }
    ));
  });

  describe("Navigation Buttons", () => {
    it("Should navigate to the Search Page when navigateToSearchPage is called", inject(
      [NavController, HomePage],
      (navCtl, sut) => {
        const navSpy = sinon.spy(navCtl, "push");

        sut.navigateToSearchPage();

        expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
      }
    ));

    it("Should navigate to the Service Canada Location navigateToSCCLocationPage is called", inject(
      [NavController, HomePage],
      (navCtl, sut) => {
        const navSpy = sinon.spy(navCtl, "push");

        sut.navigateToSCCLocationPage();

        expect(navSpy).to.have.been.calledWith(SitePages.Locations);
      }
    ));

    it("Should navigate to the My Notifications Page when navigateToMyNotificationsPage is called", inject(
      [NavController, HomePage],
      (navCtl, sut) => {
        const navSpy = sinon.spy(navCtl, "push");

        sut.navigateToMyNotificationsPage();

        expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
      }
    ));

    it("Should navigate to the Benefit Finder Page when navigateToBenefitFinderPage is called", inject(
      [NavController, HomePage],
      (navCtl, sut) => {
        const navSpy = sinon.spy(navCtl, "push");

        sut.navigateToBenefitFinderPage();

        expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
      }
    ));

    it("Should navigate to the Life Events Page when navigationToLifeEventsPage is called", inject(
      [NavController, HomePage],
      (navCtl, sut) => {
        const navSpy = sinon.spy(navCtl, "push");

        sut.navigateToLifeEventsPage();

        expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
      }
    ));
  });
});
