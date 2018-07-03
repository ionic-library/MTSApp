import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  ViewController,
  IonicPage,
  NavController,
  NavParams
} from "ionic-angular";

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

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService
  ) {
    this.modalTitle = navParams.get("modalTitle");
    console.log(this.modalTitle);
    this.helpSections = navParams.get("sections");
    console.log(this.helpSections);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HelpModalPage");
  }

  dismiss() {
    this.viewCtrl
      .dismiss()
      .then(() => console.log("Help modal dismissed"))
      .catch((reason: any) => console.error(reason));
  }
}
