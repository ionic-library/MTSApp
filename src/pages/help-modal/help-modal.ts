import { Component } from "@angular/core";
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
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}

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
