import { CommonTestModule } from "./../../app/sharedModules";
import { AcceptanceStatementPage } from "./acceptance-statement";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { NavMock, NavParamsMock, ModalCtrlMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "..";
import { Report } from "../../models/mockEiReport"
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);

describe("The Acceptance Statement Page", () => {
  let sut: ComponentFixture<AcceptanceStatementPage>;
  let acceptanceStatementPage: AcceptanceStatementPage;
  let navSpy: sinon.SinonSpy;
  let modalSpy: sinon.SinonSpy;
  let fakeNavController: NavMock;
  let fakeNavParams: NavParamsMock;
  let fakeModalCtrl: ModalCtrlMock;
  

  beforeEach(async () => {
    fakeNavController = new NavMock();
    fakeNavParams = new NavParamsMock();
    fakeModalCtrl = new ModalCtrlMock();
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([AcceptanceStatementPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController },
        { provide: NavParams, useValue: fakeNavParams },
        { provide: ModalController, useValue: fakeModalCtrl }
      ])
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(AcceptanceStatementPage);
    acceptanceStatementPage = sut.componentInstance;
    navSpy = sinon.spy(fakeNavController, "push");
    modalSpy = sinon.spy(fakeModalCtrl, "create");
  });

  it("Should navigate to the Questionaire when acceptStatement is called", () => {
    let report = fakeNavParams.get(0);
    acceptanceStatementPage.acceptStatement(report);
    expect(navSpy).to.have.been.calledWith(SitePages.Questionaire);
  });

  it("Should call NavParams.get() with 'report' as argument", () => {
    let navParamsSpy = sinon.spy(fakeNavParams, "get");
    let page = TestBed.createComponent(AcceptanceStatementPage);
    expect(navParamsSpy).to.have.been.calledWith('report');
  });

  // it("Should receive Report object of type Report", () => {
  //   let navParamsSpy = sinon.spy(fakeNavParams, "get");
  //   let page = TestBed.createComponent(AcceptanceStatementPage);
  //   acceptanceStatementPage = page.componentInstance;
  //   expect(acceptanceStatementPage.report).to.be.a('Report');
  // });

  it("Should navigate to the Home Page when refuseStatement is called", () => {
    acceptanceStatementPage.refuseStatement(event);
    expect(navSpy).to.have.been.calledWith(SitePages.Home);
  });

  it("Should present user with Help Modal when Help button is clicked", () => {
    acceptanceStatementPage.presentHelpModal;
    expect(modalSpy).to.not.throw();
  });
});
