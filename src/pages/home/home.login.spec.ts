import { CommonTestModule } from "./../../app/sharedModules";
import { HomePage } from "./home";
import { NavController } from "ionic-angular";
import { NavMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "..";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { User } from "../../providers";
import { ineeda } from "ineeda";

let { expect } = chai;
chai.use(sinonChai);

describe("The Home Page login putton", () =>{
  let homePage : HomePage;
  let navSpy : sinon.SinonSpy;
  let fakeNavController : NavMock;
  let fakeLoginCheck: boolean;
  let sut : ComponentFixture<HomePage>;

  beforeEach(async () => {
    fakeNavController = new NavMock();

    //Set an intercept on the FakeUser created in the sharedCompponents file
    ineeda.intercept<User>({
      isLoggedIn: () => fakeLoginCheck
    })

    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([HomePage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController },
      ])
    }).compileComponents();
  });

  beforeEach(() => {
    sut = TestBed.createComponent(HomePage);
    homePage = sut.componentInstance;
    navSpy = sinon.spy(fakeNavController, "push");
  });

  afterEach(() => {
    homePage = null;
    sut = null;
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