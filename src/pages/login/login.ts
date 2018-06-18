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

import { User, ProvincesProvider } from "../../providers";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  login: FormGroup;
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  // TODO: Determine if this is the best place for this.
  account: {
    sin: string;
    accesscode: string;
    residence: string;
  } = {
    sin: "",
    accesscode: "",
    residence: "ON"
  };

  // Our translated text strings
  private loginErrorString: string = "";
  submitAttempt: boolean;

  constructor(
    public readonly navCtrl: NavController,
    public readonly modalCtrl: ModalController,
    public readonly user: User,
    public readonly toastCtrl: ToastController,
    public readonly translateService: TranslateService,
    public readonly provinces: ProvincesProvider,
    private readonly formBuilder: FormBuilder
  ) {
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

    this.translateService.get("LOGIN_ERROR").subscribe(value => {
      this.loginErrorString = value;
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

    this.user.login(this.account).subscribe(
      () => {
        this.navCtrl
          .push(SitePages.EiReporting)
          .then(() => console.log("Login Successfull"))
          .catch((reason: any) => console.error(reason));
      },
      (error: any) => {
        console.error(
          "An error occured when logging in: " + JSON.stringify(error)
        );

        const toast = this.toastCtrl.create({
          message: this.loginErrorString,
          duration: 3000,
          position: "top"
        });

        toast
          .present()
          .then(() =>
            console.log("toast displayed with " + this.loginErrorString)
          )
          .catch((reason: any) => console.error(reason));
      }
    );
  }

  presentHelpModal() {
    console.log("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal);
    helpModal
      .present()
      .then(() => console.log("Help Modal Displayed"))
      .catch((reason: any) => console.error(reason));
  }
}
