import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { QuestionairePage } from "./questionaire";

let { expect } = chai;
chai.use(sinonChai);

describe("The Questionaire Page", () => {
  let sut: ComponentFixture<QuestionairePage>;
  let comp: QuestionairePage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([QuestionairePage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(QuestionairePage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

});