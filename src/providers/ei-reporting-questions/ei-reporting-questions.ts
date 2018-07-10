import { HttpClient } from "@angular/common/http";
import { Logger } from "winston";
import { LogProvider, QuestionJsonLoaderProvider } from "../../providers";
import { Injectable } from "@angular/core";
import { BooleanQuestion } from "../../models";

/**
 * Get EI Reporting questions from a file.
 */
@Injectable()
export class EiReportingQuestionsProvider {
  private readonly logger: Logger;
  private questions: BooleanQuestion[];

  constructor(
    private readonly http: HttpClient,
    private readonly logProvider: LogProvider,
    private readonly jsonLoader: QuestionJsonLoaderProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.logger.info("Constructing EiReportingQuestionsProvider");

    this.http
      .get("assets/questions.json")
      .subscribe((data: any[]) => this.loadFromJson(data));
  }

  private readonly loadFromJson = (data: any[]): void => {
    this.questions = data.map(
      (json: any): BooleanQuestion => this.jsonLoader.loadQuestionFromJson(json)
    );
  };

  /**
   * Get the first question in the list of questions
   */
  getFirstQuestion = (): BooleanQuestion => this.questions[0];

  /**
   * Get a question based on an id or name based on the value passed in
   * @value: The Id or Name of the question to retrieve
   */
  getQuestion = (value: number | string): BooleanQuestion => {
    switch (typeof value) {
      case "number":
        return this.questions.find(x => x.id === value);
      case "string":
        return this.questions.find(x => x.name === value);
    }
  };

  /**
   * The total number of questions
   */
  getTotalQuestions = (): number => this.questions.length;
}
