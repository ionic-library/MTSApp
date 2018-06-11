import { AppStorageProvider } from "./../app-storage/app-storage";
import { EIReportCard } from "./../../models/userModel";
import { CommonTestModule } from "./../../app/sharedModules";
import { ReportCardStorageProvider } from "./report-card-storage";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);

describe("report-card-storage Provider", () => {
  let sut: ReportCardStorageProvider;
  let fakeStorage: AppStorageProvider;
  const reportCard: EIReportCard = new EIReportCard();
  reportCard.questions = [true, true];

  beforeEach(() => {
    fakeStorage = new AppStorageProvider(null);
    sut = new ReportCardStorageProvider(fakeStorage);
  });

  afterEach(() => {
    sut = null;
  });

  it("Should be created with no errors", () => {
    expect(sut).to.exist;
  });

  it("Should retrieve the card from localStorage", () => {
    sinon.stub(fakeStorage, "load").returns(reportCard);
    expect(sut.loadReportCard()).to.be.deep.equal(reportCard);
  });

  it("Should save to app storage provider", () => {
    sinon.stub(fakeStorage, "save").resolves();
    sut.saveReportCard(reportCard);
    expect(fakeStorage.save).to.be.calledWith(sut.reportCardKey, reportCard);
  });
});
