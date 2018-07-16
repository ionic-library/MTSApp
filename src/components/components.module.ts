import { NgModule } from "@angular/core";
import { HomePageCarouselComponent } from "./home-page-carousel/home-page-carousel";
import { StatusCardComponent } from "./status-card/status-card";
import { EiStatusComponent } from "./ei-status/ei-status";
@NgModule({
  declarations: [
    HomePageCarouselComponent,
    StatusCardComponent,
    EiStatusComponent
  ],
  imports: [],
  exports: [HomePageCarouselComponent, StatusCardComponent, EiStatusComponent]
})
export class ComponentsModule {}
