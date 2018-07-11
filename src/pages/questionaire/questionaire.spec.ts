import { BooleanQuestionComponent } from "./../../components/boolean-question/boolean-question";
import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import { QuestionairePage } from "./questionaire";

import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

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
