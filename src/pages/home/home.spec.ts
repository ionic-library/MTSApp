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


  it("Should navigate to the EI Reporting Login Page when EILogin is hit", () => {
        var navSpy  = sinon.spy(fakeNavController, 'push');
        homePage.openPage
        expect(navSpy).to.have.been.calledWith("LoginPage");
    }
  );
});
