import { LangCodes } from "./../../providers/Lang/Lang";
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Settings } from "../../providers";
import { User } from "../../providers/user/user";

/**
 * The Settings page is a simple form that syncs with a Settings provider
 * to enable the user to customize settings for the app.
 *
 */
@IonicPage()
@Component({
  selector: "page-settings",
  templateUrl: "settings.html"
})
export class SettingsPage {
  // Our local settings object
  options: any;

  settingsReady = false;

  selectedLanguage: any;

  languageSettings = {
    page: "language",
    pageTitleKey: "SETTINGS_PAGE_LANGUAGE"
  };

  notificationSettings = {
    page: "notifications",
    pageTitleKey: "SETTINGS_PAGE_NOTIFICATIONS"
  };

  page: string = "main";
  pageTitleKey: string = "SETTINGS_PAGE_MAIN_TITLE";

  subSettings: any = SettingsPage;
  pageTitle: string = "";

  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public navParams: NavParams,
    public translate: TranslateService,
    public user: User
  ) {}

  changeLang(selection: LangCodes) {
    console.log(selection);
    this.user.GetLang(
      (val: any) => {
        if (selection === val) {
          console.log("Selected Language is already active!");
        } else {
          this.user.setLang(selection, () => {}, () => {});
        }
      },
      () => {
        console.log("unable to get lang");
      }
    );
  }

  ionViewDidLoad() {}

  ionViewWillEnter() {
    // Change page attribute to newly pushed page
    this.page = this.navParams.get("page") || this.page;
    // If page is language page, change the selected language to the active language
    if (this.page === "language") {
      this.user.GetLang(
        (val: any) => {
          this.selectedLanguage = val;
        },
        (reason: any) => {
          console.error("unable to change lang:" + JSON.stringify(reason));
        }
      );
    }
    // Change page title to the passed title on navigation
    this.pageTitleKey = this.navParams.get("pageTitleKey") || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe(res => {
      this.pageTitle = res;
    });

    this.settings
      .load()
      .then(() => {
        this.settingsReady = true;
        this.options = this.settings.allSettings;
      })
      .catch((reason: any) => {
        console.log(reason);
      });
  }

  ngOnChanges() {
    console.log("Ng All Changes");
  }
}
