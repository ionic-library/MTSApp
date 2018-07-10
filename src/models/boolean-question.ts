import { TranslatedString, BooleanAnswer } from ".";

export class BooleanQuestion {
  constructor(partial?: Partial<BooleanQuestion>) {
    Object.assign(this, partial);
  }

  name: string;
  id: number;
  title: TranslatedString;
  question: TranslatedString;
  answerOne: BooleanAnswer;
  answerTwo: BooleanAnswer;
  validations: string[];
}
