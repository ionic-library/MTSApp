import { NgModule } from "@angular/core";
import { HomePageCarouselComponent } from "./home-page-carousel/home-page-carousel";
import { StatusCardComponent } from "./status-card/status-card";
@NgModule({
  declarations: [HomePageCarouselComponent, StatusCardComponent],
  imports: [],
  exports: [HomePageCarouselComponent, StatusCardComponent]
})
export class ComponentsModule {}
