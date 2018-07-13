import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage";
import "rxjs/add/operator/toPromise";
import { LangCodes, LogProvider } from "../../providers";
import { Api } from "../api/api";
import { TranslateService } from "@ngx-translate/core";
import { Logger } from "winston";
import { UniqueDeviceID } from "@ionic-native/unique-device-id";

@Injectable()
export class User {
  private userDetails: any; //### When ready, we need to fully define the user object here
  private readonly sessionTimeOutMinutes: number = 1;
  private readonly userIdLength: number = 100;
  private readonly possibleUserIdChars: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-"; // Can add special characters or increase length to make more secure.
  private lang: LangCodes;
  private langReady: boolean = false;
  private readonly logger: Logger;

  public firstName: string = "";
  public lastName: string = "";
  public sessionLastHit: Date;
  public sin: string = "";
  public passCode: string = "";
  public region = "";
  public language = ""; //### The chosen user language on the API account may differ from the user chosen mobile app language, that's why we have two language properties
  public sessionId = "";
  public deviceId = ""; //### The unique user device ID
  public userId = ""; //### Random string to identify the user with. Case sensative.

  constructor(
    public api: Api,
    public storage: Storage,
    public translate: TranslateService,
    private readonly logProvider: LogProvider,
    private readonly uniqueDeviceId: UniqueDeviceID
  ) {
    this.logger = this.logProvider.getLogger();
    this.storage
      .get("user")
      .then((resp: any) => {
        if (resp != null) {
          this.logger.info(
            "Retreived user information from local storage and set local vars."
          );
          this.SetUserDetails(resp, false);
        } else {
          this.logger.info("User object not found in storage. (wich is fine)");
          this.uniqueDeviceId
            .get()
            .then((uuid: any) => console.log(uuid))
            .catch(() => {
              this.deviceId = "TEMPID_WEB"; // Normally due to not being on a device.
            });
          //### Set random userID to be saved and used later

          this.userId = "t"; // ensure it starts with letter
          for (var i = 0; i < this.userIdLength; i++)
            this.userId += this.possibleUserIdChars.charAt(
              Math.floor(Math.random() * this.possibleUserIdChars.length)
            );

          this.logger.info("Set random userID: " + this.userId);
        }
      })
      .catch((Error: any) => {
        this.logger.error(
          "Error hitting localstorage. This is not good, not good at all: " +
            JSON.stringify(Error)
        );
      });
  }

  public GetLang(success: Function, error: Function) {
    if (this.langReady) {
      success(this.lang);
    } else {
      this.initializeLang(
        () => {
          success(this.lang);
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
          this.lang = LangCodes.en;
          this.langReady = true;
        } else if (_Lang == "en") {
          this.lang = LangCodes.fr;
          this.langReady = true;
        }
        success();
      })
      .catch((Error: any) => {
        error(Error);
      });
  }

  public setLang(lang: LangCodes, success: Function, error: Function) {
    this.langReady = false;
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
            this.lang = lc;
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
    return !(this.userDetails === null || this.userDetails === undefined);
  }

  login(
    _sin: string,
    _passCode: string,
    _region: string,
    _language: string,
    Success: Function,
    Failure: Function
  ) {
    const accountInfo = {
      sin: _sin,
      accesscode: _passCode,
      region: _region,
      language: _language
    };

    this.api.post("authentication", accountInfo).subscribe(
      (Response: any) => {
        //### TODO - Check for non-existants of expected properties (e.g. AuthResponseStatus
        if (Response.AuthResponseStatus === "Success") {
          this.SetUserDetails(
            this.GetUserDetailsObject(
              "fName",
              "lName",
              new Date(),
              _sin,
              _passCode,
              _region,
              _language,
              Response.sessionID,
              this.deviceId,
              this.userId
            ),
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
    this.userDetails = null;
  }

  private SetUserDetails(_userDetails: any, SaveLocalStorage: boolean = false) {
    this.firstName = _userDetails.firstName;
    this.lastName = _userDetails.lastName;
    this.sessionLastHit = _userDetails.SessionLastHit;
    this.sin = _userDetails.sin;
    this.passCode = _userDetails.passCode;
    this.region = _userDetails.region;
    this.language = _userDetails.language;
    this.sessionId = _userDetails.sessionId;
    this.deviceId = _userDetails.deviceID;
    this.userId = _userDetails.userID;

    this.userDetails = _userDetails;
    console.log(this.userDetails);
    this.logger.info("User information has been loaded locally.");
    if (SaveLocalStorage) {
      this.storage
        .set("user", _userDetails) // For some reason it throws a DataCloneError on JSON object store. Will address it later.
        .then(() => {
          this.logger.info("Saved user session to local storage");
        })
        .catch((Error: any) => {
          this.logger.error(
            "Error saving user session to local storage: " +
              JSON.stringify(Error)
          );
        });
    }
  }

  public IsSessionValid() {
    const now = new Date();
    const MilliConvert = 60000; // Doing this because Lint told me to
    if (
      this.sessionLastHit != undefined &&
      this.sessionLastHit.getTime() +
        this.sessionTimeOutMinutes * MilliConvert >
        now.getTime()
    ) {
      //console.log(this.sessionLastHit);
      this.logger.info("Session is good");
      return true;
    } else {
      this.logger.info("Session is no good");
      return false;
    }
  }

  public GetUserDetailsObject(
    _firstName: string,
    _lastName: string,
    _sessionLastHit: Date,
    _sin: string,
    _passCode: string,
    _region: string,
    _language: string,
    _sessionId: string,
    _deviceId: string,
    _userId: string
  ) {
    // As new user variables are required they'd get added here.
    return {
      firstName: _firstName,
      lastName: _lastName,
      sessionLastHit: _sessionLastHit,
      sin: _sin,
      passCode: _passCode,
      region: _region,
      language: _language,
      sessionId: _sessionId,
      deviceId: _deviceId,
      userId: _userId
    };
  }
}
