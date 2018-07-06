import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";
import { SitePages } from "../index";

import { Logger } from "winston";
import { LogProvider } from "../../providers";
/**
 * Generated class for the SupportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-support",
  templateUrl: "support.html"
})
export class SupportPage {
  private readonly logger: Logger;

  aboutSupport = {
    page: "about",
    pageTitleKey: "ABOUT_PAGE_TITLE"
  };
  subSupport: any = SupportPage;
  page: string = "supportMain";
  pageTitleKey: string = "SUPPORT_PAGE_TITLE";
  sitePages: any = SitePages;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  ionViewWillEnter() {
    // Change page attribute to newly pushed page
    this.page = this.navParams.get("page") || this.page;
    this.logger.info(this.page);
    // Change page title to the passed title on navigation
    this.pageTitleKey = this.navParams.get("pageTitleKey") || this.pageTitleKey;
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad SupportPage");
  }
}
