/* tslint:disable */
//We don't need to lint this page right now as its purely for mock objects for tests
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";

export class TranslateMock {
  public setDefaultLang() {}
  public getBrowserLang = () => "en";
}
export class SettingsMock {}
export class PlatformMock {
  public ready(): Promise<string> {
    return new Promise(resolve => {
      resolve("READY");
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return () => true;
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: "10",
      paddingTop: "10",
      paddingRight: "10",
      paddingBottom: "10"
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(
    ele: any,
    eventName: string,
    callback: any
  ): Function {
    return () => true;
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document["activeElement"];
  }
}

export class StatusBarMock extends StatusBar {
  styleDefault() {
    return;
  }
}

export class SplashScreenMock extends SplashScreen {
  hide() {
    return;
  }
}

export class NavMock {
  public pop(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      instance: {
        model: "something"
      }
    };
  }

  public setRoot(): any {
    return true;
  }

  public registerChildNav(nav: any): void {
    return;
  }
}

export class NavParamsMock {
  static returnParam = null;
  public get(key): any {
    if (NavParamsMock.returnParam) {
      return NavParamsMock.returnParam;
    }
    return "default";
  }
  public setParams(value) {
    NavParamsMock.returnParam = value;
  }
}

export class ModalCtrlMock {
  public create(): any {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
}

export class DeepLinkerMock {}

export class StorageMock  {
  get() {
    throw Error("StorageMock.Get not Mocked");
  }

  set() {
    throw Error("StorageMock.Set not Mocked");
  }


}

/* tslint:enable*/
