import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";

/*
  Generated class for the AppStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppStorageProvider {
  constructor(private ionicStorage: Storage) {
    console.debug("Creating App Storage Provider");
  }

  load(key: string): any {
    return this.ionicStorage.get(key).then(val => {
      this.debugLog("get", key, val);
      return val;
    });
  }

  async asyncLoad(key: string): Promise<any> {
    return await this.ionicStorage.get(key).then(val => {
      this.debugLog("asyncGet", key, val);
      return val;
    });
  }

  /**
   *
   * Save an object to ionicStorage and don't wait for it save
   * @param key Key to save object under
   * @param value The object to save
   */
  async save(key: string, value: any) {
    this.debugLog("set", key, value);
    return await this.ionicStorage.set(key, value);
  }

  private debugLog(msg: string, key: string, value: any) {
    console.debug(
      "AppStorage => " +
        msg +
        " key : " +
        key +
        " value : " +
        JSON.stringify(value)
    );
  }
}
