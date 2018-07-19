import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

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

  current: number = 22;
  max: number = 50;
  color: string = "#45ccce";
  background: string = "#eaeaea";
  stroke: number = 8;
  radius: number = 52;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  duration: number = 800;
  animation: string = "easeInOutCubic";
  animationDelay: number = 1;

  constructor(public navCtrl: NavController) {
    console.log("Hello StatusCardComponent Component");
    this.text = "Hello World";
  }
}
