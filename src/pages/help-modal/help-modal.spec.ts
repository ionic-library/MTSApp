import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { HelpModalPage } from "./help-modal";

const { expect } = chai;
chai.use(sinonChai);

describe("The Help Modal", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([HelpModalPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: HelpModalPage, useClass: HelpModalPage }
      ])
    }).compileComponents();
  }));

  it("Should be created with no errors", inject([HelpModalPage], sut => {
    expect(sut).to.exist;
  }));
});
