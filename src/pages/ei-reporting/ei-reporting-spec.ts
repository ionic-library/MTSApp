import { CommonTestModule } from "./../../app/sharedModules";
import { SitePages } from "..";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { EiReportingPage } from "./ei-reporting";

let { expect } = chai;
chai.use(sinonChai);

describe("The EI Reporting Landing Page", () => {
  let sut: ComponentFixture<EiReportingPage>;
  let comp: EiReportingPage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([EiReportingPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(EiReportingPage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

});
