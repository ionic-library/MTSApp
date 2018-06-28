import { SitePages } from "../pages";
import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TranslateService } from "@ngx-translate/core";
import { Config, Nav, Platform } from "ionic-angular";
import { MenuController } from "ionic-angular";
import { FirstRunPage } from "../pages";
import { User } from "../providers";

@Component({
  template: `<ion-menu id="main-nav-menu" class="nav-menu" [content]="content" persistent="true">
    <ion-header>
      <ion-toolbar color="navMenuBackground">
        <ion-title>Pages</ion-title>
        <ion-buttons end>
          <button id="close-nav-menu" ion-button clear menuClose>
            <ion-icon name="close" aria-label="Close"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content color="navMenuBackground">
      <ion-list class="nav-menu-list" color="navMenuBackground">
        <button text-wrap menuClose ion-item icon-left icon-only *ngFor="let p of pages; let i = index; let first = first; let last = last;"
        [attr.id]="'nav-menu-button-pages-' + i"
        color="navMenuButton"
        [class.first-item]="first"
        [class.last-item]="last"
        (click)="openPage(p)">
          <ion-icon class="nav-menu-icon" name="{{p.iconName}}"></ion-icon>
          <p class="nav-option-text">{{p.title | translate}}</p>
        </button>
        <button id="nav-menu-language-toggle" menuClose ion-item color="navMenuButton" (click)="changeLang()">
          {{"ALT_LANG"| translate}}
        </button>
        <button id="nav-menu-dev-pages" ion-item color="navMenuButton" (click)="openDevPages()">
          Dev Pages
        </button>
      </ion-list>

      <ion-list class="nav-menu-list">
        <button menuClose ion-item icon-left icon-only *ngFor="let p of userSelections; let i = index; let last = last;"
        [attr.id]="'nav-menu-button-options-' + i"
        [attr.aria-label]="p.title"
        color="navMenuButton"
        [class.last-item]="last"
        (click)="openSettings(p.title)">
          <ion-icon class="nav-menu-icon" name="{{p.iconName}}"></ion-icon>
          <p class="nav-option-text">{{p.title | translate}}</p>
        </button>
      </ion-list>

    </ion-content>
  </ion-menu>
  
  <ion-menu id="dev-pages" [content]="content" class="nav-menu">
    <ion-header>
      <ion-toolbar color="navMenuBackground">
        <ion-title>Pages</ion-title>
        <ion-buttons end>
          <button id="close-nav-menu" ion-button clear menuClose (click)="makeMainNavActive()">
            <ion-icon name="close" aria-label="Close"></ion-icon>
          </button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content color="navMenuBackground">
      <ion-list class="nav-menu-list">
        <button menuClose ion-item *ngFor="let p of pagesInProgress; let i = index; let last = last"
        [attr.id]="'nav-menu-button-pagesInProgress-' + i"
        [attr.aria-label]="p.title"
        color="navMenuButton"
        [class.last-item]="last"
        (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>
  </ion-menu>
  
  <ion-nav #content [root]="rootPage"></ion-nav>`
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
      title: "EI_REPORTING_TITLE",
      component: SitePages.EiReporting,
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
    },
    {
      title: "LOGOUT_NAV_MENU_TITLE",
      component: SitePages.BlankPage,
      iconName: "MTSApp-Logout"
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
    { title: "EULA", component: SitePages.eula }
  ];

  constructor(
    private readonly translate: TranslateService,
    readonly platform: Platform,
    private readonly config: Config,
    private readonly statusBar: StatusBar,
    private readonly splashScreen: SplashScreen,
    private readonly user: User,
    private readonly menuCtrl: MenuController
  ) {
    platform
      .ready()
      .then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        this.statusBar.styleDefault();
        this.splashScreen.hide();
        this.config.set("ios", "backButtonText", "");
        this.config.set("android", "backButtonText", "");
      })
      .catch((reason: any) => {
        console.error(reason);
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
        console.log("lang set error error");
      }
    );
  }

  openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav
      .setRoot(page.component)
      .then(() => console.log("Opening a page as root " + JSON.stringify(page)))
      .catch((reason: any) => console.error(reason));
  }

  openDevPages() {
    console.log("click received");
    this.menuCtrl
      .toggle()
      .then(() => console.log("Toggling main nav menu"))
      .catch((reason: any) => console.error(reason));
    this.menuCtrl.enable(true, "dev-pages");
    this.menuCtrl.enable(false, "main-nav-menu");
    this.menuCtrl
      .toggle()
      .then(() => console.log("Toggling dev page menu"))
      .catch((reason: any) => console.error(reason));
  }

  makeMainNavActive() {
    this.menuCtrl.enable(true, "main-nav-menu");
    this.menuCtrl.enable(false, "dev-pages");
  }

  openSettings(selection) {
    switch (selection) {
      case "SUPPORT_NAV_MENU_TITLE":
        this.nav
          .push(SitePages.Support)
          .then(() => console.log("Opening Support"))
          .catch((reason: any) => console.error(reason));
        break;
      case "SETTINGS_NAV_MENU_TITLE":
        this.nav
          .push(SitePages.Settings)
          .then(() => console.log("Opening Settings"))
          .catch((reason: any) => console.error(reason));
    }
  }

  changeLang() {
    this.user.alternateLang();
  }
}
