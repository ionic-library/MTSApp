import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Api } from '../api/api';
import { Lang, LangCodes } from "../../providers";
import { VALID } from '@angular/forms/src/model';

@Injectable()
export class User {
  _user: any;

  public isLangSet: boolean;
  public Lang: LangCodes;


  constructor(public api: Api, public storage: Storage) {
    console.log(1);
    this.initializeLang();
    setTimeout(function () { console.log('done timer') }, 1000);
    console.log(4);
  }

  private async initializeLang() {
    console.log(2);
    let running = true;
    this.storage.get('lang')
      .then((val) => {
        console.log(3);
        console.log('Setting Lang: ' + val);
        if (val == "fr") {
          this.Lang = LangCodes.FR;
          this.isLangSet = true;
        } else if (val == "en") {
          this.Lang = LangCodes.EN;
          this.isLangSet = true;
        } else {
          this.isLangSet = false;
        }
        running = false;
      })
      .catch((val) => {
        console.log("!! Retreiving lang from local storage failed. !!");
        this.isLangSet = false;
      });

    }

  public setLang(lang: LangCodes) {
    this.storage.set('lang', lang);
    this.initializeLang();
  }



  //############################### Below this line is standard functions we will redo later once API is ready or mapped out at least.

  isLoggedIn(): boolean {
    //### FOR TESTING
    return true;
    //return !(this._user === null || this._user === undefined);
  }

  login(accountInfo: any) {
    let seq = this.api.post('login', accountInfo).share();
    console.log("UserLogged in with " + accountInfo);

    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });

    return seq;
  }
  logout() {
    this._user = null;
  }
  private _loggedIn(resp) {
    this._user = resp.user;
  }

}
