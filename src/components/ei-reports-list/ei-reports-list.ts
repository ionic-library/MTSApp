import { Component } from "@angular/core";

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

  constructor() {
    console.log("Hello EiReportsListComponent Component");
    this.text = "Hello World";
  }
}
