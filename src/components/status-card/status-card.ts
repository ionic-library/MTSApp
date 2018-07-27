import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { SitePages } from "@pages";
import { Logger } from "winston";
import { LogProvider } from "@providers";

/**
 * Generated class for the StatusCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "status-card",
  templateUrl: "status-card.html"
})
export class StatusCardComponent {
  private readonly logger: Logger;
  text: string;

  current: number = 22;
  max: number = 50;
  color: string = "#45ccce";
  background: string = "#eaeaea";
  stroke: number = 8;
  radius: number = 60;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  duration: number = 800;
  animation: string = "easeInOutCubic";
  animationDelay: number = 1;

  constructor(
    public navCtrl: NavController,
    private readonly logProvider: LogProvider
  ) {
    console.log("Hello StatusCardComponent Component");
    this.logger = this.logProvider.getLogger();
  }

  public navigateToMobileReporting = () =>
    this.navigateToPage(SitePages.EiReporting);

  private readonly navigateToPage = (page: SitePages) => {
    this.navCtrl
      .push(page)
      .then(() => this.logger.info("Navigating to : " + page.toString()))
      .catch((reason: any) => this.logger.error(reason));
  };
}
