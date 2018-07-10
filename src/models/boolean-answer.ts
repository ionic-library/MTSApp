import { RedirectToId, RedirectToName, Terminate } from "./actions/actions";
import { TranslatedString } from ".";

export class BooleanAnswer {
  constructor(partial?: Partial<BooleanAnswer>) {
    Object.assign(this, partial);
  }

  text: TranslatedString;
  action: RedirectToId | RedirectToName | Terminate;
}
