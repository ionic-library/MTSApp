import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
import { EiDashboardPage } from "./ei-dashboard";
import { EiReportsListComponent } from "../../components/ei-reports-list/ei-reports-list";

const { expect } = chai;
chai.use(sinonChai);

describe("The EI Reporting Landing Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([
        EiDashboardPage,
        EiReportsListComponent
      ]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: EiDashboardPage, useClass: EiDashboardPage }
      ])
    });
  }));

  it("Should be created with no errors", inject([EiDashboardPage], sut => {
    expect(sut).to.exist;
  }));
});
