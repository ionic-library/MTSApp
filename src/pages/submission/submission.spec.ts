import { CommonTestModule } from "./../../app/sharedModules";
import { SitePages } from "..";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { SubmissionPage } from "./submission";

let { expect } = chai;
chai.use(sinonChai);

describe("The Submission Page", () => {
  let sut: ComponentFixture<SubmissionPage>;
  let comp: SubmissionPage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([SubmissionPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(SubmissionPage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

});