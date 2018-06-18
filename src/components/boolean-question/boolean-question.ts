import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { LangCodes } from "./../../providers/Lang/Lang";
import { Component } from "@angular/core";

/**
 * Generated class for the YesNoQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

class TranslatedString {
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

class BooleanQuestion {
  title: TranslatedString;
  question: TranslatedString;
  explanation: TranslatedString;
  number: number;
  total: number;
}

/**
 *  A question with two possible answers, typically yes and no.
 */
@Component({
  selector: "boolean-question",
  templateUrl: "boolean-question.html"
})
export class BooleanQuestionComponent {
  private readonly input: BooleanQuestion = {
    title: new TranslatedString({
      en: "Address and Direct Deposit",
      fr: "Adresse et dépôt direct"
    }),
    question: new TranslatedString({
      en:
        "Have you moved, changed your mailing address or changed the banking information you provided for Direct Deposit purposes?",
      fr:
        "Avez-vous déménagé, changé d'adresse postale ou modifié l'information bancaire fournie pour le dépôt direct ?"
    }),
    explanation: new TranslatedString({
      en: "",
      fr: ""
    }),
    number: 1,
    total: 7
  };

  title: string;
  question: string;
  explanation: string;
  readonly number: string = this.input.number.toString();
  readonly total: string = this.input.total.toString();

  constructor(private readonly translate: TranslateService) {
    this.setupInitialTranstlations();
    this.translate.onLangChange.subscribe((params: LangChangeEvent) => {
      this.setLanguage(LangCodes[params.lang]);
    });
  }

  private setupInitialTranstlations() {
    const currentLang = this.translate.getBrowserLang();
    const langCode = LangCodes[currentLang];
    this.setLanguage(langCode);
  }

  private setLanguage(lang: LangCodes) {
    if (lang === undefined) {
      throw new Error("No Lang Code passed in.");
    }
    this.title = this.input.title.toString(lang);
    this.question = this.input.question.toString(lang);
    this.explanation = this.input.explanation.toString(lang);
  }
}
