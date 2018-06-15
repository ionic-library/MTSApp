import { HomePageCarouselComponent } from "./../../components/home-page-carousel/home-page-carousel";
import { CommonTestModule } from "./../../app/sharedModules";
import { HomePage } from "./home";
import { NavController } from "ionic-angular";
import { NavMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "..";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { User } from "../../providers";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);

describe("The Home Page", () => {
  let sut: ComponentFixture<HomePage>;
  let homePage: HomePage;
  let navSpy: sinon.SinonSpy;
  let fakeNavController: NavMock;
  let fakeUser: User;

  function setupTestBedConfig() {
    fakeNavController = new NavMock();
    fakeUser = new User(null, null);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([
        HomePage,
        HomePageCarouselComponent
      ]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController },
        { provide: User, useValue: fakeUser }
      ])
    }).compileComponents();
  }

  function createTestObjects() {
    sut = TestBed.createComponent(HomePage);
    homePage = sut.componentInstance;
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
      expect(homePage).to.exist;
    });
  });

  describe("Login Button", () => {
    beforeEach(async () => {
      setupTestBedConfig();
    });

    beforeEach(() => {
      createTestObjects();
    });

    it("Should navigate to the EI Reporting Login Page when user is not logged in", () => {
      sinon.stub(fakeUser, "isLoggedIn").returns(false);
      homePage.navigateToEIReportingPage();
      expect(navSpy).to.have.been.calledWith(SitePages.EILogin);
    });

    it("Should navigate to the EI Reporting Page when user is logged in", () => {
      sinon.stub(fakeUser, "isLoggedIn").returns(true);
      homePage.navigateToEIReportingPage();
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
      homePage.navigateToSearchPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the Service Canada Location navigateToSCCLocationPage is called", () => {
      homePage.navigateToSCCLocationPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the My Notifications Page when navigateToMyNotificationsPage is called", () => {
      homePage.navigateToMyNotificationsPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the Benefit Finder Page when navigateToBenefitFinderPage is called", () => {
      homePage.navigateToBenefitFinderPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });

    it("Should navigate to the Life Events Page when navigationToLifeEventsPage is called", () => {
      homePage.navigateToLifeEventsPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BlankPage);
    });
  });
});
