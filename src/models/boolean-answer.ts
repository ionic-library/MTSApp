import { TranslatedString } from ".";

export class BooleanAnswer {
  constructor(partial?: Partial<BooleanAnswer>) {
    Object.assign(this, partial);
  }

  text: TranslatedString;
  action: number | string;
}
