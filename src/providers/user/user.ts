import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import "rxjs/add/operator/toPromise";
import { LangCodes, LogProvider } from "../../providers";
import { Api } from "../api/api";
import { TranslateService } from "@ngx-translate/core";
import { Logger } from "winston";
import { error } from "selenium-webdriver";
import { UniqueDeviceID } from "@ionic-native/unique-device-id";

@Injectable()
export class User {
  private UserDetails: any; //### When ready, we need to define the user object here
  private SessionTimeOutMinutes: number = 1;
  private Lang: LangCodes;
  private LangReady: boolean = false;
  private readonly logger: Logger;

  public firstName: string = "";
  public lastName: string = "";
  public sessionLastHit: Date;
  public SIN: string = "";
  public passCode: string = "";
  public region = "";
  public language = ""; //### The chosen user language on the API account may differ from the user chosen mobile app language, that's why we have two language properties
  public sessionID = "";
  public deviceID = ""; //### The unique user device ID
  public userID = ""; //### Random string to identify the user with

  constructor(
    public api: Api,
    public storage: Storage,
    public translate: TranslateService,
    private readonly logProvider: LogProvider,
    private uniqueDeviceID: UniqueDeviceID
  ) {
    this.logger = this.logProvider.getLogger();
    this.storage
      .get("user")
      .then((resp: any) => {
        if (resp != null) {
          this.logger.info(
            "Retreived user information from local storage. Setting user vars."
          );
          this._loggedIn(resp, false);
        } else {
          this.logger.info("User object not found in storage. (wich is fine)");
          this.uniqueDeviceID
            .get()
            .then((uuid: any) => console.log(uuid))
            .catch((error: any) => {
              this.deviceID = "TEMPID_WEB"; // Normally due to not being on a device.
            });
          //### Set random userID to be saved and used later
          let text = "";
          let possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
          this.userID = "t"; // ensure it starts with letter
          for (var i = 0; i < 100; i++)
            this.userID += possible.charAt(
              Math.floor(Math.random() * possible.length)
            );

          this.logger.info("Set random userID: " + this.userID);
        }
      })
      .catch((Error: any) => {
        this.logger.error(
          "Error hitting localstorage. This is not good, not good at all."
        );
      });
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
    return !(this.UserDetails === null || this.UserDetails === undefined);
  }

  login(
    _SIN: string,
    _AccessCode: string,
    _Region: string,
    _Language: string,
    Success: Function,
    Failure: Function
  ) {
    const accountInfo = {
      sin: _SIN,
      accesscode: _AccessCode,
      region: _Region,
      language: _Language
    };

    this.api.post("authentication", accountInfo).subscribe(
      (Response: any) => {
        //### TODO - Check for non-existants of expected properties (e.g. AuthResponseStatus
        if (Response.AuthResponseStatus === "Success") {
          let _UserDetails = {
            firstName: "FName",
            lastName: "LName",
            sessionLastHit: Date.now, // We will need to update this on each action in the app
            SIN: _SIN,
            passCode: _AccessCode,
            region: _Region,
            language: _Language,
            sessionID: Response.sessionID,
            deviceID: this.deviceID,
            userID: this.userID
          };
          this._loggedIn(
            {
              _UserDetails
            },
            true
          );
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
    this.UserDetails = null;
  }

  private _loggedIn(resp: any, SaveLocalStorage: boolean = false) {
    this.firstName = resp.firstName;
    this.lastName = resp.lastName;
    this.sessionLastHit = resp.SessionLastHit;
    this.SIN = resp.SIN;
    this.passCode = resp.passCode;
    this.region = resp.region;
    this.language = resp.language;
    this.sessionID = resp.sessionID;
    this.deviceID = resp.deviceID;
    this.userID = resp.userID;

    this.UserDetails = resp;

    this.logger.info("User has been logged in.");
    if (SaveLocalStorage) {
      this.storage
        .set("user", JSON.stringify(resp)) // For some reason it throws a DataCloneError on JSON object store. Will address it later.
        .then(() => {
          this.logger.info("Saved user session to local storage");
        })
        .catch((Error: any) => {
          this.logger.error(
            "Error saving user session to local storage: " + Error
          );
        });
    }
  }

  public IsSessionValid() {
    let now = new Date();
    if (
      this.sessionLastHit != undefined &&
      this.sessionLastHit.getTime() + this.SessionTimeOutMinutes * 60000 >
        now.getTime()
    ) {
      console.log(this.sessionLastHit);
      this.logger.info("Session is good");
      return true;
    } else {
      this.logger.info("Session is no good");
      return false;
    }
  }
}
