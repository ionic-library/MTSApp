import { Component } from "@angular/core";

/**
 * Generated class for the EiStatusComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "ei-status",
  templateUrl: "ei-status.html"
})
export class EiStatusComponent {
  text: string;

  constructor() {
    console.log("Hello EiStatusComponent Component");
    this.text = "Hello World";
  }
}
