import { TranslatedString, BooleanAnswer } from ".";

export class BooleanQuestion {
  name: string;
  id: number;
  title: TranslatedString;
  question: TranslatedString;
  answerOne: BooleanAnswer;
  answerTwo: BooleanAnswer;
  validations: string[];
}
