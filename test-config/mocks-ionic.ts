/* tslint:disable */
//We don't need to lint this page right now as its purely for mock objects for tests
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { Storage } from "@ionic/storage";
const NOOP = () => {};
const EmptyPromise = () =>
  new Promise(
    (resolve: Function): void => {
      resolve();
    }
  );
export class TranslateMock {
  public setDefaultLang() {}
  public getBrowserLang = () => "en";
}
export class SettingsMock {
  load() {
    return new Promise(function(resolve: Function): void {
      resolve();
    });
  }
}
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
    return EmptyPromise();
  }

  public push(): any {
    return EmptyPromise();
  }

  public get(): any {
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
    return EmptyPromise();
  }
}

export class DeepLinkerMock {}

export class StorageMock {
  // Get and set can't throw errors as they are needed in a constructor
  get() {
    return EmptyPromise();
  }
  set() {
    return EmptyPromise();
  }

  public readonly driver: string;

  public ready() {
    throw Error("StorageMock.ready() not Mocked");
  }

  private _getDriverOrder() {
    throw Error("StorageMock._getDriverOrdere() not Mocked");
  }

  public remove() {
    throw Error("StorageMock.remove() not Mocked");
  }

  public clear() {
    throw Error("StorageMock.clear() not Mocked");
  }

  public length() {
    throw Error("StorageMock.length() not Mocked");
  }

  public keys() {
    throw Error("StorageMock.keys() not Mocked");
  }

  public forEach(iteratorCallback) {
    throw Error("StorageMock.foreach(iteratorCallback) not Mocked");
  }
}

/* tslint:enable*/
