import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import "rxjs/add/operator/toPromise";
import { LangCodes, LogProvider } from "../../providers";
import { Api } from "../api/api";
import { TranslateService } from "@ngx-translate/core";
import { Logger } from "winston";

@Injectable()
export class User {
  _user: any;

  private Lang: LangCodes;
  private LangReady: boolean = false;
  private readonly logger: Logger;

  constructor(
    public api: Api,
    public storage: Storage,
    public translate: TranslateService,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
  }

  public GetLang(success: Function, error: Function) {
    if (this.LangReady) {
      success(this.Lang);
    } else {
      this.initializeLang(
        () => {
          success(this.Lang);
        },
        (Error: any) => {
          error(Error);
        }
      );
    }
  }

  private initializeLang(success: Function, error: Function) {
    this.storage
      .get("lang")
      .then(val => {
        if (val == "fr") {
          this.Lang = LangCodes.fr;
          this.LangReady = true;
        } else if (val == "en") {
          this.Lang = LangCodes.en;
          this.LangReady = true;
        }
        success();
      })
      .catch((Error: any) => {
        error(Error);
      });
  }

  public setLang(lang: LangCodes, success: Function, error: Function) {
    this.LangReady = false;
    this.storage
      .set("lang", lang)
      .then(() => {
        this.translate.use(lang);
        success();
      })
      .catch((Error: any) => {
        error(Error);
      });
  }

  public alternateLang() {
    this.GetLang(
      (val: string) => {
        let lc = LangCodes.en;
        if (val == "en") {
          lc = LangCodes.fr;
        }

        this.setLang(
          lc,
          () => {
            this.Lang = lc;
          },
          (Error: any) => {
            this.logger.info("Could not change lang: " + JSON.stringify(Error));
          }
        );
      },
      (Error: any) => {
        this.logger.info("Could not get lang: " + JSON.stringify(Error));
      }
    );
  }

  public isEulaAgreed(success: Function, error: Function) {
    this.storage
      .get("eula")
      .then((YesNo: string) => {
        //### Decided to string this as in my experience storage does better with strings than bools but we can always easily change it here.
        if (YesNo === "Yes") {
          success(true);
        } else {
          success(false);
        }
      })
      .catch((Error: any) => {
        error(Error);
      });
  }

  public setEulaAgreed(success: Function, error: Function) {
    this.storage
      .set("eula", "Yes")
      .then(() => {
        success();
      })
      .catch((Error: any) => {
        error(Error);
      });
  }

  //############################### Below this line is standard functions we will redo later once API is ready or mapped out at least.

  isLoggedIn(): boolean {
    //### FOR TESTING
    return true;
    //return !(this._user === null || this._user === undefined);
  }

  login(accountInfo: any) {
    const seq = this.api.post("login", accountInfo).share();
    this.logger.info("UserLogged in with " + JSON.stringify(accountInfo));
    this._loggedIn({
      user: {
        Name: "First Last"
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
      this.logger.error('ERROR', err);
    });
*/
    return seq;
  }

  logout() {
    this._user = null;
  }

  private _loggedIn(resp: any) {
    this._user = resp.user;
  }
}
