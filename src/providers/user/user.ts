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

  public firstName: string = "";
  public lastName: string = "";
  public SIN: string = "";
  public passCode: string = "";
  public sessionStart: Date;

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
      .then((_Lang: string) => {
        if (_Lang == "fr") {
          this.Lang = LangCodes.FR;
          this.LangReady = true;
        } else if (_Lang == "en") {
          this.Lang = LangCodes.EN;
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
      (_Lang: string) => {
        let lc = LangCodes.EN;
        if (_Lang == "en") {
          lc = LangCodes.FR;
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

  isLoggedIn(): boolean {
    return !(this._user === null || this._user === undefined);
  }

  login(
    _SIN: string,
    _AccessCode: string,
    _Region: string,
    _Language: string,
    Success: Function,
    Failure: Function
  ) {
    let LoggedIn = false;
    const accountInfo = {
      sin: _SIN,
      accesscode: _AccessCode,
      region: _Region,
      language: _Language
    };

    this.api.post("authentication", accountInfo).subscribe(
      (Response: any) => {
        if (Response.AuthResponseStatus === "Success") {
          this._loggedIn({
            user: {
              FirstName: "FName",
              LastName: "LName",
              SessionLastHit: Date.now, // We will need to update this on each action in the app
              SIN: _SIN,
              PassCode: _AccessCode,
              Region: _Region,
              Language: _Language,
              SessionID: Response.sessionID
            }
          });
          this.logger.info("User was logged in");
          Success();
        } else {
          this.logger.info(
            "User was not logged in. Non-Success from API on login call."
          );
          Failure("invalid"); // Check later for AuthResponseStatus and send that back if it exists (instead of simply saying invalid)
        }
      },
      (error: any) => {
        this.logger.error(error);
        Failure("no-connection"); // We will want to refactor this to provide more detail. This is likely due to no connectivity by the device, the API was down or the device killed the connection mid transfer
      }
    );
  }

  logout() {
    this._user = null;
  }

  private _loggedIn(resp: any) {
    this._user = resp.user;
  }
}
