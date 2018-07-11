import { Component } from "@angular/core";

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
  text: string;

  constructor() {
    console.log("Hello StatusCardComponent Component");
    this.text = "Hello World";
  }
}
