import { EIReportCard } from "./../../models/userModel";
import { Injectable } from "@angular/core";
import { AppStorageProvider } from "../app-storage/app-storage";
import { ERROR_COLLECTOR_TOKEN } from "@angular/platform-browser-dynamic/src/compiler_factory";

/*
  Storage for the EI Report Card
*/

@Injectable()
export class ReportCardStorageProvider {
  constructor(private storage: AppStorageProvider) {}

  public readonly reportCardKey: string = "ReportCard";

  loadReportCard(): EIReportCard {
    console.debug("Loading Report Card");

    let card = this.storage.load(this.reportCardKey);

    if (!(card instanceof EIReportCard)) {
      throw Error(
        "Got object of type " +
          card.constructor.Name +
          " instead of EIReportCard"
      );
    }

    return card;
  }

  saveReportCard(card: EIReportCard) {
    this.storage.save(this.reportCardKey, card);
  }
}
