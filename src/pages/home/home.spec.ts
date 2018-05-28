import { EiReportingPage } from './../ei-reporting/ei-reporting';
import { CommonTestModule } from "./../../app/sharedModules";
import { HomePage } from "./home";
import { NavController } from "ionic-angular";
import { NavMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "..";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ineeda } from 'ineeda';
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

  function setupTestBedConfig(){
    fakeNavController = new NavMock();
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([HomePage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController }
      ])
    }).compileComponents();
  }

  function createTestObjects(){
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

    it("Should be created with no errors",() => {
      expect(homePage).to.exist;
    });

  })

  describe("Login Button",() => {
    let fakeLoginCheck: boolean;

    beforeEach(async () => {
      ineeda.intercept<User>({
        isLoggedIn: () => fakeLoginCheck
      })
      setupTestBedConfig();
    });

    beforeEach(() => {
      createTestObjects();
    });


    it("Should navigate to the EI Reporting Login Page when user is not logged in", () => {
      fakeLoginCheck = false;
      homePage.navigateToEIReportingPage();
      expect(navSpy).to.have.been.calledWith(SitePages.EILogin);
    });

    it("Should navigate to the EI Reporting Page when user is logged in", () => {
      fakeLoginCheck = true;
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
      expect(navSpy).to.have.been.calledWith(SitePages.JobSearch);
    });

    it("Should navigate to the Service Canada Location navigateToSCCLocationPage is called", () => {
      homePage.navigateToSCCLocationPage();
      expect(navSpy).to.have.been.calledWith(SitePages.SCCLocations);
    });

    it("Should navigate to the My Notifications Page when navigateToMyNotificationsPage is called", () => {
      homePage.navigateToMyNotificationsPage();
      expect(navSpy).to.have.been.calledWith(SitePages.MyNotifications);
    });

    it("Should navigate to the Benefit Finder Page when navigateToBenefitFinderPage is called", () => {
      homePage.navigateToBenefitFinderPage();
      expect(navSpy).to.have.been.calledWith(SitePages.BenefitFinder);
    });

    it("Should navigate to the Life Events Page when navigationToLifeEventsPage is called", () => {
      homePage.navigateToLifeEventsPage();
      expect(navSpy).to.have.been.calledWith(SitePages.LifeEvents);
    });
  })

});
