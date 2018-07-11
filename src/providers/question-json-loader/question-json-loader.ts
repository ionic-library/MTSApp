import { RedirectToName, Terminate } from "./../../models/actions/actions";
import {
  BooleanQuestion,
  TranslatedString,
  BooleanAnswer
} from "./../../models";
import { Injectable } from "@angular/core";
import { decimal } from "../../constants";
import { RedirectToId } from "../../models/actions/actions";

/*
  Generated class for the QuestionJsonLoaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionJsonLoaderProvider {
  constructor() {}

  /**
   * Load a BooleanQuestion from a json object.
   * @json: The json object to load the BooleanQuestion from
   */
  public loadQuestionFromJson(json: any): BooleanQuestion {
    return new BooleanQuestion({
      id: json.id,
      name: json.name,
      validations: json.validations,
      title: new TranslatedString(json.title),
      question: new TranslatedString(json.question),
      answerTrue: this.loadAnswerFromJson(json.answers[0]),
      answerFalse: this.loadAnswerFromJson(json.answers[1])
    });
  }

  private getAction(action: any): RedirectToId | RedirectToName | Terminate {
    const props = Object.getOwnPropertyNames(action);

    if (props.length > 1) {
      throw Error("Too many actions for ${action.name}");
    }

    switch (props[0]) {
      case "redirect_to_id":
        return new RedirectToId({
          id: parseInt(action.redirect_to_id, decimal)
        });

      case "redirect_to_name":
        return new RedirectToName({ name: action.redirect_to_name });

      case "terminate":
        return new Terminate();
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
