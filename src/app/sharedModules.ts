import {
  IonicModule,
  NavController,
  ViewController,
  Platform,
  ModalController,
  NavParams
} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { HttpClient } from "@angular/common/http";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Settings } from "../providers/settings/settings";
import { createTranslateLoader } from "./app.module";
import * as _ from "lodash";
import { HttpClientTestingModule } from "@angular/common/http/testing";
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
  NavMock,
  ModalCtrlMock,
  NavParamsMock,
  StorageMock
} from "../../test-config/mocks-ionic";
import { Provider, ModuleWithProviders } from "@angular/compiler/src/core";
import { ProvincesProvider, User, Api } from "../providers";
import { Type } from "@angular/core";
import { Reports } from "../mocks/providers/mock-ei-reports";

export class CommonTestModule {
  /**
   * Get the list of declarations for this test
   */
  public static getDeclarations = (arr?): Array<Type<any> | any[]> =>
    [MyApp].concat(arr || []);
  /*

  /**
   *
   */
  public static getImports = (
    arr?
  ): Array<Type<any> | ModuleWithProviders | any[]> =>
    [
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

  public static getProviders = (overrides?: Provider[]): Provider[] => {
    let providers = [
      { provide: Reports },
      { provide: ViewController },
      { provide: NavParams, useClass: NavParamsMock },
      { provide: NavController, useClass: NavMock },
      { provide: ModalController, useClass: ModalCtrlMock },
      { provide: StatusBar, useClass: StatusBarMock },
      { provide: SplashScreen, useClass: SplashScreenMock },
      { provide: Platform, useClass: PlatformMock },
      { provide: TranslateService, useClass: TranslateService },
      { provide: Settings, useClass: SettingsMock },
      { provide: ProvincesProvider, useClass: ProvincesProvider },
      //Create our default lang mock
      { provide: User, useClass: User },
      { provide: Api, useClass: Api },
      { provide: Storage, useClass: StorageMock }
    ];

    if (overrides == null) {
      return providers;
    }
    var retVal = CommonTestModule.overrideProviders(overrides, providers);
    return retVal;
  };

  private static overrideProviders(
    overrides: Provider[],
    providers: Provider[]
  ): Provider[] {
    overrides.forEach((ele: Provider) => {
      let i = _.findIndex(providers, { provide: ele.Provide });
      if (i === -1) {
        providers.push(ele);
      } else {
        providers.splice(i, 1, ele);
      }
    });
    return providers;
  }
}
