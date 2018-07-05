import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Logger } from "winston";
import { LogProvider } from "../../providers";
/**
 * Generated class for the LocationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-locations",
  templateUrl: "locations.html"
})
export class LocationsPage {
  private readonly logger: Logger;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad LocationsPage");
  }
}
