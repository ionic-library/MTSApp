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
  StorageMock,
  UniqueDeviceIDMoch
} from "../../test-config/mocks-ionic";
import { Provider, ModuleWithProviders } from "@angular/compiler/src/core";
import { LogProvider, ProvincesProvider, User, Api } from "../providers";
import { Type } from "@angular/core";
import { Reports } from "../mocks/providers/mock-ei-reports";
import { UniqueDeviceID } from "@ionic-native/unique-device-id";

export class CommonTestModule {
  /**
   * Get the list of declarations for this test
   */
  public static getDeclarations = (arr?: any): Array<Type<any> | any[]> =>
    [MyApp].concat(arr || []);
  /*

  /**
   *
   */
  public static getImports = (
    arr?: any
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
    const providers = [
      { provide: Reports },
      { provide: ViewController },
      { provide: NavParams, useClass: NavParamsMock },
      { provide: NavController, useClass: NavMock },
      { provide: LogProvider, useClass: LogProvider },
      { provide: ModalController, useClass: ModalCtrlMock },
      { provide: StatusBar, useClass: StatusBarMock },
      { provide: SplashScreen, useClass: SplashScreenMock },
      { provide: Platform, useClass: PlatformMock },
      { provide: TranslateService, useClass: TranslateService },
      { provide: Settings, useClass: SettingsMock },
      { provide: ProvincesProvider, useClass: ProvincesProvider },
      //Create our default lang mock
      { provide: Api, useClass: Api },
      { provide: Storage, useClass: StorageMock },
      { provide: Reports, useClass: Reports },
      { provide: User, useClass: User },
      { provide: UniqueDeviceID, useClass: UniqueDeviceIDMoch }
    ];

    if (overrides == null) {
      return providers;
    }
    return CommonTestModule.overrideProviders(overrides, providers);
  };

  private static overrideProviders(
    overrides: Provider[],
    providers: Provider[]
  ): Provider[] {
    overrides.forEach((ele: Provider) => {
      const foundItemIndex = _.findIndex(providers, { provide: ele.Provide });
      if (foundItemIndex === -1) {
        providers.push(ele);
      } else {
        providers.splice(foundItemIndex, 1, ele);
      }
    });
    return providers;
  }
}
