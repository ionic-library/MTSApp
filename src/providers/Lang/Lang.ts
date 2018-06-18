import { Injectable } from "@angular/core";

export enum LangCodes {
  en = "en",
  fr = "fr"
}

@Injectable()
export class Lang {
  public static GetCurrentLang() {
    return LangCodes.en;
  }
}
