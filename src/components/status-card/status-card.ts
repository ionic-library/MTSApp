import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
// import { RoundProgressComponent } from "angular-svg-round-progressbar";

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

  current: number = 30;
  max: number = 50;
  color: string = "#45ccce";
  background: string = "#eaeaea";
  stroke: number = 10;
  radius: number = 65;
  semicircle: boolean = false;
  rounded: boolean = false;
  responsive: boolean = false;
  clockwise: boolean = true;
  duration: number = 800;
  animation: string = "easeInOutCubic";
  animationDelay: number = 0;

  constructor(public navCtrl: NavController) {
    console.log("Hello StatusCardComponent Component");
    this.text = "Hello World";
  }
}
