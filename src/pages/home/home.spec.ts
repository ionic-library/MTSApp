import { SitePages } from '..';
import { NavMock } from './../../../test-config/mocks-ionic';
import { HomePage } from './home';
import { CommonTestModule } from './../../app/sharedModules';
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import ineeda from "ineeda";
import { NavController } from 'ionic-angular';


let { expect } = chai;
chai.use(sinonChai);


describe("The Home Page", () => {
  let sut;
  let homePage : HomePage;
  let fakeNavController : NavMock;

  testNav(navCommand, page){
    var navSpy  = sinon.spy(fakeNavController, 'push');
    navCommand();
    expect(navSpy).to.have.been.calledWith(SitePages.EILogin);
  }
  beforeEach(async () => {
    fakeNavController = new NavMock();
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([HomePage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        {provide: NavController, useClass: fakeNavController}
      ])
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(HomePage);
    homePage = sut.componentInstance;
  });

  //public = () => this.navCtrl.push(SitePages.EiReporting);
  // public navigatetosearchpage = () => this.navctrl.push(sitepages.jobsearch);
  // public navigatetomynotificationspage = () => this.navctrl.push(sitepages.mynotifications);
  // public navigatetobenefitfinderpage = () => this.navctrl.push(sitepages.benefitfinder);
  // public navigatetoscclocationpage = () => this.navctrl.push(sitepages.scclocations);
  // public navigatetolifeeventspage = () => this.navctrl.push(sitepages.lifeevents);


  it("Should navigate to the EI Reporting Login Page when navigateToEIReportingPage is called is hit", () => {
    this.testnav(homePage.navigateToEIReportingPage(), SitePages.EILogin);
  });
});
