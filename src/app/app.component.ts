import { SitePages } from "../pages";
import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { isDevMode } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Config, Nav, Platform } from "ionic-angular";
import { MenuController } from "ionic-angular";
import { FirstRunPage } from "../pages";
import { User, LogProvider } from "../providers";
import { Logger } from "winston";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  readonly pages = [
    { title: "Home", component: SitePages.Home, iconName: "MTSApp-Home" },
    {
      title: "Future Feature",
      component: SitePages.BlankPage,
      iconName: "MTSApp-Notification"
    },
    {
      title: "Future Feature",
      component: SitePages.BlankPage,
      iconName: "MTSApp-Finder"
    },
    {
      title: "JOB_SEARCH_TITLE",
      component: SitePages.BlankPage,
      iconName: "MTSApp-JobSearch"
    },
    {
      title: "EI_DASHBOARD_PAGE_TITLE",
      component: SitePages.EiDashboard,
      iconName: "MTSApp-EIReporting"
    },
    {
      title: "SC_LOCATIONS",
      component: SitePages.Locations,
      iconName: "MTSApp-SCCLocations"
    },
    {
      title: "Future Feature",
      component: SitePages.BlankPage,
      iconName: "MTSApp-LifeEvents"
    }
  ];

  readonly userSelections = [
    {
      title: "SETTINGS_NAV_MENU_TITLE",
      component: SitePages.Settings,
      iconName: "MTSApp-Settings"
    },
    {
      title: "SUPPORT_NAV_MENU_TITLE",
      component: SitePages.Support,
      iconName: "MTSApp-Support"
    }
  ];

  readonly pagesInProgress = [
    { title: "Blank Page", component: SitePages.BlankPage },
    { title: "Confirmation", component: SitePages.Confirmation },
    { title: "Questionnaire", component: SitePages.Questionaire },
    { title: "Login", component: SitePages.EILogin },
    { title: "Issue", component: SitePages.IssueWithReport },
    { title: "LoginFailed", component: SitePages.LoginFalied },
    { title: "Splash", component: SitePages.Splash },
    { title: "EULA", component: SitePages.eula },
    { title: "EIDashboard", component: SitePages.EiDashboard }
  ];

  isDevMode = isDevMode();
  private readonly logger: Logger;

  constructor(
    private readonly translate: TranslateService,
    readonly platform: Platform,
    private readonly config: Config,
    private readonly splashScreen: SplashScreen,
    private readonly user: User,
    private readonly menuCtrl: MenuController,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    platform
      .ready()
      .then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.splashScreen.hide();
        this.config.set("ios", "backButtonText", "");
        this.config.set("android", "backButtonText", "");
      })
      .catch((reason: any) => {
        this.logger.error(reason);
      });

    this.initTranslate();
  }

  public initTranslate() {
    // Set the default language for translation strings, and the current language selected if aavailable
    this.translate.setDefaultLang("en");
    this.user.GetLang(
      (val: string) => {
        if (val == "en" || val == "fr") {
          this.translate.use(val);
        }
      },
      () => {
        this.logger.info("lang set error error");
      }
    );
  }

  public openPage(page: any) {
    console.log(page);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if (page.component === "EiDashboardPage") {
      this.openEIDashboard();
    } else {
      this.nav
        .push(page.component)
        .then(() =>
          this.logger.info(
            "Opening a page with back button " + JSON.stringify(page)
          )
        )
        .catch((reason: any) => this.logger.error(reason));
    }
  }
  public openEIDashboard() {
    if (this.user.isLoggedIn()) {
      console.log("User is logged in!");
      this.nav
        .push(SitePages.EiDashboard)
        .then(() => this.logger.info("Navigating to Login Page"))
        .catch((reason: any) => this.logger.error(reason));
    } else {
      this.nav
        .push(SitePages.EILogin)
        .then(() => this.logger.info("Opening EI Dashboard Page"))
        .catch((reason: any) => this.logger.error(reason));
    }
  }

  public openDevPages() {
    this.logger.info("click received");
    this.menuCtrl
      .toggle()
      .then(() => this.logger.info("Toggling main nav menu"))
      .catch((reason: any) => this.logger.error(reason));
    this.menuCtrl.enable(true, "dev-pages");
    this.menuCtrl.enable(false, "main-nav-menu");
    this.menuCtrl
      .toggle()
      .then(() => this.logger.info("Toggling dev page menu"))
      .catch((reason: any) => this.logger.error(reason));
  }

  public makeMainNavActive() {
    this.menuCtrl.enable(true, "main-nav-menu");
    this.menuCtrl.enable(false, "dev-pages");
  }

  public openSettings(selection) {
    switch (selection) {
      case "SUPPORT_NAV_MENU_TITLE":
        this.nav
          .push(SitePages.Support)
          .then(() => this.logger.info("Opening Support"))
          .catch((reason: any) => this.logger.error(reason));
        break;
      case "SETTINGS_NAV_MENU_TITLE":
        this.nav
          .push(SitePages.Settings)
          .then(() => this.logger.info("Opening Settings"))
          .catch((reason: any) => this.logger.error(reason));
    }
  }

  public changeLang() {
    this.user.alternateLang();
  }

  public login() {
    this.nav
      .push(SitePages.EILogin)
      .then(() => this.logger.info("Opening EILogin"))
      .catch((reason: any) => this.logger.error(reason));
  }

  public logout() {
    this.user.logout();
    this.nav
      .push(SitePages.Home)
      .then(() => this.logger.info("Redirecting to Home"))
      .catch((reason: any) => this.logger.error(reason));
    console.log(this.user.isLoggedIn());
  }
}
