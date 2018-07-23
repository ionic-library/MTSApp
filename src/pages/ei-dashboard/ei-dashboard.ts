import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateService } from "../../../node_modules/@ngx-translate/core";

/**
 * Generated class for the EiDashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-ei-dashboard",
  templateUrl: "ei-dashboard.html"
})
export class EiDashboardPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EiDashboardPage");
  }
}
