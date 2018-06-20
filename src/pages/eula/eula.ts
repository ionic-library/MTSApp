import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { User } from "../../providers";
import { SitePages } from "../../pages";

@IonicPage()
@Component({
  selector: "page-eula",
  templateUrl: "eula.html"
})
export class EulaPage {
  constructor(public navCtrl: NavController, public user: User) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad EulaPage");
  }

  public setEula() {
    this.user.setEulaAgreed(
      () => {
        this.navCtrl
          .push(SitePages.Home)
          .then(() => console.log("EULA set. Navigating to " + SitePages.Home))
          .catch((reason: any) =>
            console.error(
              "Could not redirect to home after EULA: " + JSON.stringify(reason)
            )
          );
      },
      (reason: any) => {
        console.error("Could not set EULA: " + JSON.stringify(reason));
      }
    );
  }
}
