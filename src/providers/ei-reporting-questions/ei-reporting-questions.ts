import { Logger } from "winston";
import { LogProvider } from "../../providers";
import { Injectable } from "@angular/core";

/*
  Generated class for the EiReportingQuestionsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EiReportingQuestionsProvider {
  private readonly logging: Logger;

  constructor(private readonly logProvider: LogProvider) {
    this.logging = this.logProvider.getLogger();
    this.logging.info("Constructing EiReportingQuestionsProvider");
  }
}
