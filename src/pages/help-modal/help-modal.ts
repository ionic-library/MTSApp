import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  ViewController,
  IonicPage,
  NavController,
  NavParams
} from "ionic-angular";
import { Logger } from "winston";
import { LogProvider } from "../../providers";

/**
 * Generated class for the HelpModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-help-modal",
  templateUrl: "help-modal.html"
})
export class HelpModalPage {
  public modalTitle: string;
  public helpSections: any;
  private readonly logger: Logger;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.modalTitle = navParams.get("modalTitle");
    this.logger.info(this.modalTitle);
    this.helpSections = navParams.get("sections");
    this.logger.info(this.helpSections);
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad HelpModalPage");
  }

  dismiss() {
    this.viewCtrl
      .dismiss()
      .then(() => this.logger.info("Help modal dismissed"))
      .catch((reason: any) => this.logger.error(reason));
  }
}
