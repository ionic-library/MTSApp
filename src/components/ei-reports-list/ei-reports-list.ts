import { Component } from "@angular/core";
import { TranslateService } from "../../../node_modules/@ngx-translate/core";

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
  text: string;

  constructor(public translate: TranslateService) {
    console.log("Hello EiReportsListComponent Component");
    this.text = "Hello World";
  }
}
