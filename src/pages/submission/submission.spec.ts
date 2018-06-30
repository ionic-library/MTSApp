import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
import { SubmissionPage } from "./submission";

const { expect } = chai;
chai.use(sinonChai);

describe("The Submission Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([SubmissionPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: SubmissionPage, useClass: SubmissionPage }
      ])
    }).compileComponents();
  }));

  it("Should be created with no errors", inject([SubmissionPage], sut => {
    expect(sut).to.exist;
  }));
});
