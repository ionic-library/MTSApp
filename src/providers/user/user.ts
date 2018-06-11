import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Api } from '../api/api';
import { Lang, LangCodes } from "../../providers";
import { VALID } from '@angular/forms/src/model';

@Injectable()
export class User {
  _user: any;

  private isLangSet:boolean = false;
  public Lang:LangCodes;
  private LangReady:boolean = false;


  constructor(public api: Api, public storage: Storage) {
   
  }


  public GetLang(success: Function, error: Function) {
    if (this.LangReady) {
      success(this.Lang);
    } else {
      this.initializeLang(() => {
        success(this.Lang);
      }, (val) => {
        error(val);
      });
    }
  }

  private initializeLang(success: Function, error: Function) {
    this.storage.get('lang')
      .then((val) => {
        if (val == "fr") {
          this.Lang = LangCodes.FR;
          this.isLangSet = true;
          this.LangReady = true;
        } else if (val == "en") {
          this.Lang = LangCodes.EN;
          this.isLangSet = true;
          this.LangReady = true;
        } else {
          this.isLangSet = false;
        }
        success();
      })
      .catch((val) => {
        this.isLangSet = false;
        error(val);
      });

  }

 
  public setLang(lang: LangCodes, success: Function, error: Function) {
    this.LangReady = false;
    this.storage.set('lang', lang)
      .then(() => {
        success();
      })
      .catch((val) => {
        error(val);
      });
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
    this._loggedIn({
      "user" : {
        "Name": "First Last"
      }
    });
/*
    seq.subscribe((res: any) => {
      // If the API returned a successful response, mark the user as logged in
      if (res.status == 'success') {
        this._loggedIn(res);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
*/
    return seq;
  }
  logout() {
    this._user = null;
  }
  private _loggedIn(resp) {
    this._user = resp.user;
  }
}
