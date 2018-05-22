import { IonicModule, NavController, Platform } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Settings } from "../providers/settings/settings";
import { createTranslateLoader } from "./app.module";
import assign from "lodash/assign";
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import {
  TranslateLoader,
  TranslateModule,
  TranslateService
} from "@ngx-translate/core";
import { MyApp } from "./app.component";
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock,
  SettingsMock,
  NavMock
} from "../../test-config/mocks-ionic";

export class CommonTestModule {
  public static getDeclarations = (arr?) => [MyApp].concat(arr || []);

  public static getImports = (arr?) => [
      IonicModule.forRoot(MyApp),
      HttpClientTestingModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      })
    ].concat(arr || []);

  public static getProviders = (overrides?) => assign([
      { provide: NavController, useClass: NavMock },
      { provide: StatusBar, useClass: StatusBarMock },
      { provide: SplashScreen, useClass: SplashScreenMock },
      { provide: Platform, useClass: PlatformMock },
      { provide: TranslateService, useClass: TranslateService },
      { provide: Settings, useClass: SettingsMock }
    ], overrides);

}
