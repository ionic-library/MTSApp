import { RedirectToId, RedirectToName } from "./../../models/actions/actions";
import { BooleanQuestion } from "./../../models/boolean-question";
import { EiReportingQuestionsProvider } from "./../../providers";
import { BooleanQuestionComponent } from "../../components";
import { Component, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SitePages } from "../index";
import { Logger } from "winston";
import { LogProvider } from "../../providers";

@IonicPage()
@Component({
  selector: "page-questionaire",
  templateUrl: "questionaire.html"
})
export class QuestionairePage {
  @ViewChild("boolean-question")
  booleanQuestionComponent: BooleanQuestionComponent;
  private readonly logger: Logger;
  private questions: BooleanQuestion[];
  pushPage: any;

  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider,
    private readonly questionProvider: EiReportingQuestionsProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.logger.info("Questionaire Page");
  }

  ngAfterViewInit() {
    this.logger.info("Attempting to load questions");
    this.questionProvider.loadQuestions().subscribe(
      result => {
        this.logger.info("Questions are loaded");
        this.questions = result;
        //TODO: Load existing questionaire if it exists
        this.booleanQuestionComponent.model = this.questions[0];
      },
      (reason: any) => this.logger.error(reason)
    );
  }

  /**
   * Get a question based on an id or name based on the value passed in
   * @value: The Id or Name of the question to retrieve
   */
  //Temporarily disabling linting check
  // tslint:disable-next-line:no-unused-variable
  private getQuestion(value: RedirectToId | RedirectToName): BooleanQuestion {
    this.logger.info("Getting question ${value}");

    if (value instanceof RedirectToId) {
      return this.questions.find(x => x.id === value.id);
    } else if (value instanceof RedirectToName) {
      return this.questions.find(x => x.name === value.name);
    }

    throw Error("Unknown question type");
  }

  /**
   * The total number of questions
   */
  //Temporarily disabling linting check
  // tslint:disable-next-line:no-unused-variable
  private getTotalQuestions(): number {
    return this.questions.length;
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad QuestionairePage");
  }

  presentHelpModal() {
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
  }
}
