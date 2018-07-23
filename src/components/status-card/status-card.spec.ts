import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
import { EiDashboardPage } from "../../pages/ei-dashboard/ei-dashboard";
import { StatusCardComponent } from "../../components/status-card/status-card";
import {
  RoundProgressModule,
  RoundProgressComponent
} from "angular-svg-round-progressbar";

const { expect } = chai;
chai.use(sinonChai);

describe("The Status Card Component", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([
        EiDashboardPage,
        StatusCardComponent
      ]),
      imports: CommonTestModule.getImports([RoundProgressModule]),
      providers: CommonTestModule.getProviders([
        { provide: EiDashboardPage, useClass: EiDashboardPage },
        { provide: StatusCardComponent, useClass: StatusCardComponent },
        { provide: RoundProgressComponent, useClass: RoundProgressComponent }
      ])
    });
  }));

  it("Should be created with no errors", inject(
    [EiDashboardPage, StatusCardComponent],
    sut => {
      expect(sut).to.exist;
    }
  ));
});
