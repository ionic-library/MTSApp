import { TranslateService, LangChangeEvent } from "@ngx-translate/core";
import { Component } from "@angular/core";
import { LangCodes } from "../../providers";

/**
 *  A question with two possible answers, typically yes and no.
 */
@Component({
  selector: "boolean-question",
  templateUrl: "boolean-question.html"
})
export class BooleanQuestionComponent {
  title: string;
  question: string;
  explanation: string;
  readonly number: string = "1";
  readonly total: string = "2";

  constructor(private readonly translate: TranslateService) {
    this.setupInitialTranstlations();
    this.translate.onLangChange.subscribe((params: LangChangeEvent) => {
      this.setLanguage(LangCodes[params.lang]);
    });
  }

  //setQuestion(question: BooleanQuestion) {}

  private setupInitialTranstlations() {
    const currentLang = this.translate.getBrowserLang();
    const langCode = LangCodes[currentLang];
    this.setLanguage(langCode);
  }

  private setLanguage(lang: LangCodes) {
    if (lang === undefined) {
      throw new Error("No Lang Code passed in.");
    }
    this.title = "foo";
    this.question = "bar";
    this.explanation = "baz";
  }
}
