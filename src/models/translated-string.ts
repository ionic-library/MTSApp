import { LangCodes } from "../providers";

export class TranslatedString {
  en: string;
  fr: string;

  constructor(partial: Partial<TranslatedString>) {
    Object.assign(this, partial);
  }

  /**
   * Return a translated text based on a LangCodes
   * @param lang The language to return
   */
  toString = (lang: LangCodes): string => {
    switch (lang) {
      case LangCodes.en:
        return this.en;
      case LangCodes.fr:
        return this.fr;
    }
  };
}
