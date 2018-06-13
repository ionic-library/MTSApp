import { SitePages } from "../pages";
import { Component, ViewChild } from "@angular/core";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { TranslateService } from "@ngx-translate/core";
import { Config, Nav, Platform } from "ionic-angular";
import { FirstRunPage } from "../pages";
import { Settings } from "../providers";
import { Lang, User, LangCodes } from "../providers";

@Component({
  template: `<ion-menu class="nav-menu" [content]="content" persistent="true">
    <ion-header>
      <ion-toolbar color="navMenuBackground">
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content color="navMenuBackground">
      <ion-list class="nav-menu-list" color="navMenuBackground">
        <button menuClose ion-item icon-left icon-only *ngFor="let p of pages; let first = first; let last = last;" color="navMenuButton"
        [class.first-item]="first"
        [class.last-item]="last"
        (click)="openPage(p)">
          <ion-icon class="nav-menu-icon" name="{{p.iconName}}"></ion-icon>
          <p class="nav-option-text">{{p.title}}</p>
        </button>
      </ion-list>
      <ion-list class="nav-menu-list">
        <button menuClose ion-item *ngFor="let p of pagesInProgress; let last = last" color="navMenuButton"
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

  pages: any[] = [
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
      title: "Job Search",
      component: SitePages.BlankPage,
      iconName: "MTSApp-JobSearch"
    },
    {
      title: "EI Reporting",
      component: SitePages.EiReporting,
      iconName: "MTSApp-EIReporting"
    },
    {
      title: "Future Feature",
      component: SitePages.BlankPage,
      iconName: "MTSApp-SCCLocations"
    },
    {
      title: "Future Feature",
      component: SitePages.BlankPage,
      iconName: "MTSApp-LifeEvents"
    }
  ];

  pagesInProgress: any[] = [
    { title: "Blank Page", component: SitePages.BlankPage },
    { title: "Confirmation", component: SitePages.Confirmation },
    { title: "Questionnaire", component: SitePages.Questionaire },
    { title: "Login", component: SitePages.EILogin },
    { title: "Settings", component: SitePages.Settings },
    { title: "Issue", component: SitePages.IssueWithReport },
    { title: "LoginFailed", component: SitePages.LoginFalied },
    { title: "Splash", component: SitePages.Splash }
  ];

  constructor(
    private translate: TranslateService,
    platform: Platform,
    settings: Settings,
    private config: Config,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private user: User
  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.config.set("ios", "backButtonText", "");
      this.config.set("android", "backButtonText", "");
    });
    this.initTranslate();
  }

  public initTranslate() {
    // Set the default language for translation strings, and the current language selected if aavailable
    this.translate.setDefaultLang("en");
    this.user.GetLang(
      val => {
        if (val == "en" || val == "fr") {
          this.translate.use(val);
        }
      },
      () => {
        console.log("lang set error error");
      }
    );

    this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(values => {
      // this.config.set("ios", "backButtonText", values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
