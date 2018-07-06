import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LogProvider } from "../../providers";
import { Logger } from "winston";

/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-blank",
  templateUrl: "blank.html"
})
export class BlankPage {
  private readonly logger: Logger;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad BlankPage");
  }
}
