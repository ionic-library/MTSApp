import { CommonTestModule } from "./../../app/sharedModules";
import { HomePage } from "./home";
import { NavController } from "ionic-angular";
import { NavMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "..";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
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

  beforeEach(async () => {
    fakeNavController = new NavMock();
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([HomePage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController }
      ])
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(HomePage);
    homePage = sut.componentInstance;
    navSpy = sinon.spy(fakeNavController, "push");
  });

  it("Should navigate to the Service Canada Location navigateToSCCLocationPage is called", () => {
    homePage.navigateToSCCLocationPage();
    expect(navSpy).to.have.been.calledWith(SitePages.SCCLocations);
  });

  it("Should navigate to the EI Reporting Login Page when navigateToEIReportingPage is called", () => {
    homePage.navigateToEIReportingPage();
    expect(navSpy).to.have.been.calledWith(SitePages.EiReporting);
  });

  it("Should navigate to the Search Page when navigateToSearchPage is called", () => {
    homePage.navigateToSearchPage();
    expect(navSpy).to.have.been.calledWith(SitePages.JobSearch);
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
});
