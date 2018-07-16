import { NgModule } from "@angular/core";
import { HomePageCarouselComponent } from "./home-page-carousel/home-page-carousel";
import { StatusCardComponent } from "./status-card/status-card";
import { EiReportsListComponent } from "./ei-reports-list/ei-reports-list";
@NgModule({
  declarations: [
    HomePageCarouselComponent,
    StatusCardComponent,
    EiReportsListComponent
  ],
  imports: [],
  exports: [
    HomePageCarouselComponent,
    StatusCardComponent,
    EiReportsListComponent
  ]
})
export class ComponentsModule {}
