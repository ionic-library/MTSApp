import { SitePages } from "..";
import { SinValidator } from "./../../validators/sin";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  ToastController,
  ModalController
} from "ionic-angular";
import { Logger } from "winston";
import { User, ProvincesProvider, LogProvider } from "../../providers";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  private readonly logger: Logger;
  login: FormGroup;

  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // TODO: Determine if this is the best place for this.
  account: {
    sin: string;
    accesscode: string;
    region: string;
    language: string;
  } = {
    sin: "",
    accesscode: "",
    region: "ON",
    language: "EN"
  };

  // Our translated text strings
  private loginErrorString: string = "BLAH";
  submitAttempt: boolean;

  constructor(
    public readonly navCtrl: NavController,
    public readonly modalCtrl: ModalController,
    public readonly user: User,
    public readonly toastCtrl: ToastController,
    public readonly translateService: TranslateService,
    public readonly provinces: ProvincesProvider,
    private readonly formBuilder: FormBuilder,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.login = this.formBuilder.group({
      sin: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(SinValidator.Length),
          Validators.maxLength(SinValidator.Length),
          SinValidator.isValid
        ])
      ],
      accessCode: ["", Validators.required],
      provinceOfResidence: ["", Validators.required]
    });

    this.submitAttempt = false;
  }

  showError(str: string): boolean {
    return (
      !this.login.controls[str].valid &&
      (this.login.controls[str].dirty || this.submitAttempt)
    );
  }

  // Attempt to login in through our User service
  doLogin() {
    this.submitAttempt = true;
    if (!this.login.valid) {
      return;
    }

    this.user.login(
      "SIN",
      "Access_Code",
      "Region",
      "Lang",
      () => {
        this.navCtrl
          .push(SitePages.EiReporting)
          .then(() => this.logger.info("Login Successfull"))
          .catch((reason: any) => this.logger.error(reason));
      },
      (error: any) => {
        this.translateService.get("LOGIN_ERROR").subscribe(value => {
          return value;
        });
        if (error == "no-connection") {
          this.logger.error("Cannot log in, no connection.");
          this.translateService
            .get("LOGIN_ERROR_NO_CONNECTION")
            .subscribe(value => {
              this.loginErrorString = value;
            });
        } else {
          this.logger.error("Cannot log in, invalid creds.");
          this.translateService.get("LOGIN_ERROR").subscribe(value => {
            this.loginErrorString = value;
          });
        }
        const toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: "top"
        });

        toast
          .present()
          .then(() =>
            this.logger.info("toast displayed with " + this.loginErrorString)
          )
          .catch((reason: any) => this.logger.error(reason));
      }
    );
  }

  presentHelpModal() {
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
  }
}
