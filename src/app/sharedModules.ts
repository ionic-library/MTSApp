import { IonicModule, NavController, Platform } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Settings } from "../providers/settings/settings";
import { createTranslateLoader } from "./app.module";
import * as _ from "lodash";
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
import { Provider } from "@angular/compiler/src/core";
import { ProvincesProvider } from "../providers";

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

  public static getProviders = (overrides? : Provider[]) : Provider[] => {

    let providers = [
      { provide: NavController, useClass: NavMock },
      { provide: StatusBar, useClass: StatusBarMock },
      { provide: SplashScreen, useClass: SplashScreenMock },
      { provide: Platform, useClass: PlatformMock },
      { provide: TranslateService, useClass: TranslateService },
      { provide: Settings, useClass: SettingsMock },
      { provide: ProvincesProvider, useClass: ProvincesProvider}
    ];

    if (overrides == null){
      return providers;
    }
    var retVal = CommonTestModule.overrideProviders(overrides, providers);
    return retVal;
  }

  private static overrideProviders(overrides : Provider[], providers: Provider[]) : Provider[]{
   overrides.forEach((ele : Provider) => {
    let i = _.findIndex(providers, {provide: ele.Provide})
    if (i === -1){
      providers.push(ele);
    }else{
      providers.splice(i,1, ele);
    }
   });
   return providers;
  }

}
