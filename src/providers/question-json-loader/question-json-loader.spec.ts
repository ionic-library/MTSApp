import { BooleanQuestion, BooleanAnswer, TranslatedString } from "../../models";
import { QuestionJsonLoaderProvider } from "./question-json-loader";
import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import * as chaiSubset from "chai-subset";
import { decimal } from "../../constants";

const { expect } = chai;
chai.use(sinonChai);
chai.use(chaiSubset);

describe("Question Json Loader Provider", () => {
  beforeEach(async(() => {
    //we have to stub the storage set and get here since the user provider calls to storage in the contstructor

    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations(),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    }).compileComponents();
  }));

  it("Should be created with no isses", inject(
    [QuestionJsonLoaderProvider],
    sut => {
      expect(sut).to.exist;
    }
  ));

  it("Should load an answer's text properly", inject(
    [QuestionJsonLoaderProvider],
    (sut: QuestionJsonLoaderProvider) => {
      const answer = sut.loadAnswerFromJson({
        text: {
          en: "Yes",
          fr: "Oui"
        },
        action: {
          redirect_to_id: "10"
        }
      });

      expect(answer.text).to.deep.equal(
        new TranslatedString({
          en: "Yes",
          fr: "Oui"
        })
      );
    }
  ));

  it("Should load an answer that redirects to an ID", inject(
    [QuestionJsonLoaderProvider],
    (sut: QuestionJsonLoaderProvider) => {
      const answer = sut.loadAnswerFromJson({
        text: {
          en: "Yes",
          fr: "Oui"
        },
        action: {
          redirect_to_id: "10"
        }
      });

      // tslint:disable-next-line:no-magic-numbers
      expect(answer.action).to.equal(10);
    }
  ));

  it("Should load an answer that redirects to a Name", inject(
    [QuestionJsonLoaderProvider],
    (sut: QuestionJsonLoaderProvider) => {
      const answer = sut.loadAnswerFromJson({
        text: {
          en: "Yes",
          fr: "Oui"
        },
        action: {
          redirect_to_name: "name"
        }
      });

      expect(answer.action).to.be.equal("name");
    }
  ));

  it("Should load an answer that terminates the questionaire", inject(
    [QuestionJsonLoaderProvider],
    (sut: QuestionJsonLoaderProvider) => {
      const answer = sut.loadAnswerFromJson({
        text: {
          en: "Yes",
          fr: "Oui"
        },
        action: {
          terminate: "true"
        }
      });

      expect(answer.action).to.be.equal("terminate");
    }
  ));
});
