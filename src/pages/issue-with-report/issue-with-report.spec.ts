import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { IssueWithReportPage } from "./issue-with-report";

const { expect } = chai;
chai.use(sinonChai);

describe("The Issue With Report Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([IssueWithReportPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: IssueWithReportPage, useClass: IssueWithReportPage }
      ])
    });
  }));

  it("Should be created with no errors", inject([IssueWithReportPage], sut => {
    expect(sut).to.exist;
  }));
});
