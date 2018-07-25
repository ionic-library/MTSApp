import { EiReportingQuestionsProvider } from "./ei-reporting-questions";
import { BooleanQuestionComponent } from "./../../components/boolean-question/boolean-question";
import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";

import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

const statusOk: number = 200;

const fakeResponse: string = `[{"type": "boolean",
            "id": "1",
            "name": "one",
            "title" : {
              "en": "titleEn",
              "fr": "titleFr"
            },
            "question": {
              "en": "questionEn",
              "fr": "questionFr"
            },
            "answers": [
              {
                "text": {
                  "en": "Yes",
                  "fr": "Oui"
                },
                "action": {
                  "redirect_to_id": "2"
                }
              },
              {
                "text": {
                  "en": "No",
                  "fr": "Non"
                },
                "action": {
                  "redirect_to_name": "two"
                }
              }
            ]
          },
          {"type": "boolean",
            "id": "2",
            "name": "two",
            "title" : {
              "en": "titleTwoEn",
              "fr": "titleTwoFr"
            },
            "question": {
              "en": "questionTwoEn",
              "fr": "questionTwoFr"
            },
            "answers": [
              {
                "text": {
                  "en": "Yes",
                  "fr": "Oui"
                },
                "action": {
                  "redirect_to_id": "2"
                }
              },
              {
                "text": {
                  "en": "No",
                  "fr": "Non"
                },
                "action": {
                  "terminate": "true"
                }
              }
            ]
          }]`;

describe("The Questionaire Page", () => {
  let server: sinon.SinonFakeServer;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations(),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    })
      .compileComponents()
      .then(() => {
        server = sinon.fakeServer.create();
        server.respondImmediately = true;
        server.respondWith("GET", "assets/questions.json", fakeResponse);
      });
  }));

  afterEach(() => {
    server.restore();
  });

  it("Should be created with no errors", inject(
    [EiReportingQuestionsProvider],
    (sut: EiReportingQuestionsProvider) => {
      expect(sut).to.exist;
    }
  ));

  it("Should load the EI Reporting Questions", inject(
    [EiReportingQuestionsProvider],
    (sut: EiReportingQuestionsProvider) => {
      sut.loadQuestions().subscribe(result => {
        // tslint:disable-next-line:no-magic-numbers
        expect(result.length).to.be.equal(2);
      });

      server.respond();
    }
  ));

  it("Should load the json as BooleanQuestions", inject(
    [EiReportingQuestionsProvider],
    (sut: EiReportingQuestionsProvider) => {
      sut.loadQuestions().subscribe(result => {
        // tslint:disable-next-line:no-magic-numbers
        const questionOne = result[0];

        expect(questionOne).to.deep.equal({
          id: 1,
          name: "one"
        });
      });
      server.respond();
    }
  ));
});
