import { NgModule } from "@angular/core";
import { HomePageCarouselComponent } from "./home-page-carousel/home-page-carousel";
import { StatusCardComponent } from "./status-card/status-card";
import { EiReportsListComponent } from "./ei-reports-list/ei-reports-list";
import { CommonModule } from "../../node_modules/@angular/common";
import { IonicModule } from "../../node_modules/ionic-angular/umd";
import { RoundProgressModule } from "angular-svg-round-progressbar";

@NgModule({
  declarations: [
    HomePageCarouselComponent,
    StatusCardComponent,
    EiReportsListComponent
  ],
  imports: [CommonModule, IonicModule, RoundProgressModule],
  exports: [
    HomePageCarouselComponent,
    StatusCardComponent,
    EiReportsListComponent
  ]
})
export class ComponentsModule {}
