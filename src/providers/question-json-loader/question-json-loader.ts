import {
  BooleanQuestion,
  TranslatedString,
  BooleanAnswer
} from "./../../models";
import { Injectable } from "@angular/core";
import { decimal } from "../../constants";

/*
  Generated class for the QuestionJsonLoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionJsonLoaderProvider {
  constructor() {
    console.log("Hello QuestionJsonLoaderProvider Provider");
  }

  /**
   * Load a BooleanQuestion from a json object.
   * @json: The json object to load the BooleanQuestion from
   */
  public loadQuestionFromJson(json: any): BooleanQuestion {
    const retVal = new BooleanQuestion();
    retVal.id = json.id;
    retVal.name = json.name;
    retVal.title = new TranslatedString(json.title);
    retVal.question = new TranslatedString(json.question);
    retVal.answerOne = this.loadAnswerFromJson(json.answers[0]);
    retVal.answerTwo = this.loadAnswerFromJson(json.answers[1]);
    retVal.validations = json.validations;
    return retVal;
  }

  private getAction(action: any): string | number {
    if (action.redirect_to_id !== undefined) {
      return parseInt(action.redirect_to_id, decimal);
    } else if (action.redirect_to_name !== undefined) {
      return action.redirect_to_name;
    } else if (action.terminate !== undefined) {
      return "terminate";
    }

    throw Error("No action for answer");
  }

  public loadAnswerFromJson(json: any): BooleanAnswer {
    return new BooleanAnswer({
      text: new TranslatedString(json.text),
      action: this.getAction(json.action)
    });
  }
}
