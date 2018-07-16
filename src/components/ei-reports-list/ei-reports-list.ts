import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Reports } from "../../mocks/providers/mock-ei-reports";
import { Report } from "../../models/mockEiReport";
import { SitePages } from "../../pages/index";

/**
 * Generated class for the EiReportsListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "ei-reports-list",
  templateUrl: "ei-reports-list.html"
})
export class EiReportsListComponent {
  public currentReports: Report[];

  constructor(
    private readonly navCtrl: NavController,
    public reports: Reports
  ) {
    this.currentReports = this.reports.query();
  }
  startReport = (report: any) =>
    this.navCtrl.push(SitePages.AcceptanceStatement, { report });
}
