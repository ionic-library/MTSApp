import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
import { EiReportingPage } from "./ei-reporting";

const { expect } = chai;
chai.use(sinonChai);

describe("The EI Reporting Landing Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([EiReportingPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: EiReportingPage, useClass: EiReportingPage }
      ])
    });
  }));

  it("Should be created with no errors", inject([EiReportingPage], sut => {
    expect(sut).to.exist;
  }));
});
