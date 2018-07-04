import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController
} from "ionic-angular";
import { Report } from "../../models/mockEiReport";
import { SitePages } from "..";
import { LogProvider } from "../../providers";
import { Logger } from "winston";

/**
 * Generated class for the AcceptanceStatementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-acceptance-statement",
  templateUrl: "acceptance-statement.html"
})
export class AcceptanceStatementPage {
  private readonly logger: Logger;
  report: Report;

  readonly helpSelectionOptions = {
    faqLinkOne: {
      sections: [
        {
          title: "FAQ_LINK_ONE_TITLE",
          content: "FAQ_LINK_ONE_CONTENT"
        }
      ]
    },
    faqLinkTwo: {
      sections: [
        {
          title: "FAQ_LINK_TWO_TITLE",
          content: "FAQ_LINK_TWO_CONTENT"
        }
      ]
    },
    faqLinkThree: {
      sections: [
        {
          title: "FAQ_LINK_THREE_TITLE",
          subheader: "FAQ_LINK_THREE_SUBHEADER_ONE",
          content: "FAQ_LINK_THREE_CONTENT_ONE"
        },
        {
          subheader: "FAQ_LINK_THREE_SUBHEADER_TWO",
          content: "FAQ_LINK_THREE_CONTENT_TWO"
        },
        {
          subheader: "FAQ_LINK_THREE_SUBHEADER_THREE",
          content: "FAQ_LINK_THREE_CONTENT_THREE"
        }
      ]
    },
    faqLinkFour: {
      sections: [
        {
          title: "FAQ_LINK_FOUR_TITLE",
          content: "FAQ_LINK_FOUR_CONTENT"
        }
      ]
    },
    faqLinkFive: {
      sections: [
        {
          title: "FAQ_LINK_FIVE_TITLE",
          content: "FAQ_LINK_FIVE_CONTENT"
        }
      ]
    }
  };

  constructor(
    public translate: TranslateService,
    public navParams: NavParams,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private readonly logProvider: LogProvider
  ) {
    this.logger = this.logProvider.getLogger();
    this.report = navParams.get("report");
  }

  presentHelpModal(helpSelection) {
    this.logger.info("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal, helpSelection);
    helpModal
      .present()
      .then(() => this.logger.info("Help Modal Displayed"))
      .catch((reason: any) => this.logger.error(reason));
  }

  ionViewDidLoad() {
    this.logger.info("ionViewDidLoad AcceptanceStatementPage");
  }

  acceptStatement = (report: any) => {
    this.navCtrl
      .push(SitePages.Questionaire, { report })
      .then(() => this.logger.info("accepting statement"))
      .catch((reason: any) => this.logger.error(reason));
  };

  refuseStatement = (event: Event) => {
    event.preventDefault();
    this.navCtrl
      .push(SitePages.Home)
      .then(() => this.logger.info("refusing statement"))
      .catch((reason: any) => this.logger.error(reason));
  };
}
