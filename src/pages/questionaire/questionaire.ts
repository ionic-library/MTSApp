import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { SitePages } from "@pages";
import { Logger } from "winston";
import { LogProvider } from "@providers";

@IonicPage()
@Component({
  selector: "page-questionaire",
  templateUrl: "questionaire.html"
})
export class QuestionairePage {
  private readonly logger: Logger;

  pushPage: any;

  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.pushPage = SitePages.Questionaire2;
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
