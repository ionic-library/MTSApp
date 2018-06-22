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
    public modalCtrl: ModalController
  ) {
    this.report = navParams.get("report");
  }

  presentHelpModal(helpSelection) {
    console.log("Click Received");
    const helpModal = this.modalCtrl.create(SitePages.HelpModal, helpSelection);
    helpModal
      .present()
      .then(() => console.log("Help Modal Displayed"))
      .catch((reason: any) => console.error(reason));
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AcceptanceStatementPage");
  }

  acceptStatement = (report: any) => {
    this.navCtrl
      .push(SitePages.Questionaire, { report })
      .then(() => console.log("accepting statement"))
      .catch((reason: any) => console.error(reason));
  };

  refuseStatement = (event: Event) => {
    event.preventDefault();
    this.navCtrl
      .push(SitePages.Home)
      .then(() => console.log("refusing statement"))
      .catch((reason: any) => console.error(reason));
  };
}
