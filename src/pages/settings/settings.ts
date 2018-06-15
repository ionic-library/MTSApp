import { Component } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { TranslateService } from "@ngx-translate/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { User } from "../../providers/user/user";
import { Settings } from "../../providers";

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

  form: FormGroup;

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
  pageTitleKey: string = "SETTINGS_TITLE";
  pageTitle: string;

  subSettings: any = SettingsPage;

  constructor(
    public navCtrl: NavController,
    public settings: Settings,
    public formBuilder: FormBuilder,
    public navParams: NavParams,
    public translate: TranslateService,
    public user: User
  ) {}

  _buildForm() {
    let group: any = {
      option1: [this.options.option1],
      option2: [this.options.option2],
      option3: [this.options.option3]
    };

    switch (this.page) {
      case "main":
        break;
      case "language":
        group = {
          option4: [this.options.option4]
        };
        break;
    }
    this.form = this.formBuilder.group(group);

    // Watch the form for changes, and
    this.form.valueChanges.subscribe(v => {
      this.settings.merge(this.form.value);
    });
  }

  changeLang(selection) {
    console.log(selection);
    this.user.GetLang(
      val => {
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

  ionViewDidLoad() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
  }

  ionViewWillEnter() {
    // Build an empty form for the template to render
    this.form = this.formBuilder.group({});
    // Change page attribute to newly pushed page
    this.page = this.navParams.get("page") || this.page;
    // If page is language page, change the selected language to the active language
    if (this.page === "language") {
      this.user.GetLang(
        val => {
          this.selectedLanguage = val;
        },
        val => {
          console.log("unable to change lang:" + val);
        }
      );
    }
    // Change page title to the passed title on navigation
    this.pageTitleKey = this.navParams.get("pageTitleKey") || this.pageTitleKey;

    this.translate.get(this.pageTitleKey).subscribe(res => {
      this.pageTitle = res;
    });

    this.settings.load().then(() => {
      this.settingsReady = true;
      this.options = this.settings.allSettings;

      this._buildForm();
    });
  }

  ngOnChanges() {
    console.log("Ng All Changes");
  }
}
