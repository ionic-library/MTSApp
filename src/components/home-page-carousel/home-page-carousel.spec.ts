import { HomePageCarouselComponent } from "./home-page-carousel";
import { CommonTestModule } from "./../../app/sharedModules";
import { NavController } from "ionic-angular";
import { NavMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "../../pages";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ineeda } from "ineeda";
import { User } from "../../providers";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);

describe("The Home Page", () => {
  let sut: ComponentFixture<HomePageCarouselComponent>;
  let homePageCarousel: HomePageCarouselComponent;
  let navSpy: sinon.SinonSpy;
  let fakeNavController: NavMock;

  function setupTestBedConfig() {
    fakeNavController = new NavMock();
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([
        HomePageCarouselComponent
      ]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController }
      ])
    }).compileComponents();
  }

  function createTestObjects() {
    sut = TestBed.createComponent(HomePageCarouselComponent);
    homePageCarousel = sut.componentInstance;
    navSpy = sinon.spy(fakeNavController, "push");
  }

  describe("itself", () => {
    beforeEach(async () => {
      setupTestBedConfig();
    });

    beforeEach(() => {
      createTestObjects();
    });

    it("Should be created with no errors", () => {
      expect(homePageCarousel).to.exist;
    });
  });

  describe("Login Button", () => {
    let fakeLoginCheck: boolean;

    beforeEach(async () => {
      ineeda.intercept<User>({
        isLoggedIn: () => fakeLoginCheck
      });
      setupTestBedConfig();
    });

    beforeEach(() => {
      createTestObjects();
    });

    it("Should navigate to the EI Reporting Login Page when user is not logged in", () => {
      fakeLoginCheck = false;
      homePageCarousel.navigateToEIReportingPage();
      expect(navSpy).to.have.been.calledWith(SitePages.EILogin);
    });

    it("Should navigate to the EI Reporting Page when user is logged in", () => {
      fakeLoginCheck = true;
      homePageCarousel.navigateToEIReportingPage();
      expect(navSpy).to.have.been.calledWith(SitePages.EiReporting);
    });
  });

  describe("Navigation Buttons", () => {
    beforeEach(async () => {
      setupTestBedConfig();
    });

    beforeEach(() => {
      createTestObjects();
    });

    it("Should navigate to the Search Page when navigateToSearchPage is called", () => {
      homePageCarousel.navigateToSearchPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the Service Canada Location navigateToSCCLocationPage is called", () => {
      homePageCarousel.navigateToSCCLocationPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the My Notifications Page when navigateToMyNotificationsPage is called", () => {
      homePageCarousel.navigateToMyNotificationsPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the Benefit Finder Page when navigateToBenefitFinderPage is called", () => {
      homePageCarousel.navigateToBenefitFinderPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the Life Events Page when navigationToLifeEventsPage is called", () => {
      homePageCarousel.navigateToLifeEventsPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });
  });
});