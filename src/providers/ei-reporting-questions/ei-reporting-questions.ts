import { HttpClient } from "@angular/common/http";
import { Logger } from "winston";
import { LogProvider, QuestionJsonLoaderProvider } from "../../providers";
import { Injectable } from "@angular/core";
import { BooleanQuestion } from "../../models";
import { Observable } from "rxjs/Observable";

/**
 * Get EI Reporting questions from a file.
 */
@Injectable()
export class EiReportingQuestionsProvider {
  private readonly logger: Logger;

  constructor(
    private readonly http: HttpClient,
    private readonly logProvider: LogProvider,
    private readonly jsonLoader: QuestionJsonLoaderProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.logger.info("Constructing EiReportingQuestionsProvider");
  }

  public loadQuestions(): Observable<BooleanQuestion[]> {
    this.logger.info("Loading Questions");
    return this.http
      .get<any[]>("assets/questions.json")
      .map(result =>
        result.map(json => this.jsonLoader.loadQuestionFromJson(json))
      );
  }
}
