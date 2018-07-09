import { CommonTestModule } from "./../../app/sharedModules";
import { AcceptanceStatementPage } from "./acceptance-statement";
import { NavController, NavParams, ModalController } from "ionic-angular";
import { SitePages } from "..";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("The Acceptance Statement Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([AcceptanceStatementPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: AcceptanceStatementPage, useClass: AcceptanceStatementPage }
      ])
    }).compileComponents();
  }));

  it("Should be created with no errors", inject(
    [AcceptanceStatementPage],
    sut => {
      expect(sut).to.exist;
    }
  ));

  it("Should navigate to the Questionaire when acceptStatement is called", inject(
    [AcceptanceStatementPage, NavParams, NavController],
    (sut, navParams, navController) => {
      const navSpy = sinon.spy(navController, "push");
      sut.acceptStatement(navParams.get(0));
      expect(navSpy).to.have.been.calledWith(SitePages.Questionaire);
    }
  ));

  it("Should call NavParams.get() with 'report' as argument", inject(
    [NavParams],
    navParams => {
      const navParamsSpy = sinon.spy(navParams, "get");
      const sut = TestBed.createComponent(AcceptanceStatementPage);
      expect(navParamsSpy).to.have.been.calledWith("report");
    }
  ));

  it("Should navigate to the Home Page when refuseStatement is called", inject(
    [AcceptanceStatementPage, NavController],
    (sut, navController) => {
      const event = {
        preventDefault: () => undefined
      };

      const navSpy = sinon.spy(navController, "push");

      sut.refuseStatement(event);

      expect(navSpy).to.have.been.calledWith(SitePages.Home);
    }
  ));

  it("Should present user with Help Modal when presentHelpModal is called", inject(
    [AcceptanceStatementPage, ModalController],
    (sut, modalController) => {
      const modalSpy = sinon.spy(modalController, "create");
      sut.presentHelpModal;
      expect(modalSpy).to.not.throw();
    }
  ));
});
