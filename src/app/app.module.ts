import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule, Slides } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Reports } from '../mocks/providers/mock-ei-reports';
import { HelpModalPage } from '../pages/help-modal/help-modal'
import { Settings, User, Api, Lang, ProvincesProvider } from '../providers';
import { MyApp } from './app.component';
import { QuestionairePage } from '../pages/questionaire/questionaire';
import { Questionaire_7Page } from '../pages/questionaire-7/questionaire-7';
import { Questionaire_6Page } from '../pages/questionaire-6/questionaire-6';
import { Questionaire_5Page } from '../pages/questionaire-5/questionaire-5';
import { Questionaire_3Page } from '../pages/questionaire-3/questionaire-3';
import { Questionaire_2Page } from '../pages/questionaire-2/questionaire-2';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    HelpModalPage,
    Questionaire_2Page,
    Questionaire_3Page,
    Questionaire_5Page,
    Questionaire_6Page,
    Questionaire_7Page
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    HelpModalPage,
    MyApp,
    Questionaire_2Page,
    Questionaire_3Page,
    Questionaire_5Page,
    Questionaire_6Page,
    Questionaire_7Page
  ],
  providers: [
    Api,
    Items,
    Slides,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    Reports,
    { provide: Settings, useFactory: provideSettings, deps: [Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProvincesProvider,
    Lang
  ]
})
export class AppModule { }
