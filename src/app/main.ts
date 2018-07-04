import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app.module";
import { enableProdMode } from "@angular/core";

const pageUrl = window.location.href.toLowerCase();

if (pageUrl.indexOf("localhost") === -1) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
