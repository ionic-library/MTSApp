import { BooleanQuestionComponent } from "./../../components/boolean-question/boolean-question";
import { CommonTestModule } from "./../../app/sharedModules";
<<<<<<< HEAD
import { async, TestBed, inject } from "@angular/core/testing";
=======
import { TestBed, ComponentFixture } from "@angular/core/testing";
>>>>>>> Adding component to the test
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { QuestionairePage } from "./questionaire";

const { expect } = chai;
chai.use(sinonChai);

describe("The Questionaire Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([
        QuestionairePage,
        BooleanQuestionComponent
      ]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: QuestionairePage, useClass: QuestionairePage }
      ])
    }).compileComponents();
  }));

  it("Should be created with no errors", inject([QuestionairePage], sut => {
    expect(sut).to.exist;
  }));
});
