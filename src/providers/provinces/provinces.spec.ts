import { ProvincesProvider } from "../../providers";
import { async, TestBed, inject } from "@angular/core/testing";
import { CommonTestModule } from "../../app/sharedModules";

import * as chai from "chai";

const { expect } = chai;

describe("Provinces provider", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations(),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: ProvincesProvider, useClass: ProvincesProvider }
      ])
    }).compileComponents();
  }));

  it("Should return the list of province codes", inject(
    [ProvincesProvider],
    sut => {
      expect(sut.provinceCodes).to.have.members([
        "AB",
        "BC",
        "MB",
        "NB",
        "NL",
        "NS",
        "ON",
        "PE",
        "QC",
        "SK",
        "NT",
        "NU",
        "YT"
      ]);
    }
  ));
});
