import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { ConfirmationPage } from "./confirmation";

const { expect } = chai;
chai.use(sinonChai);

describe("The Confirmation Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([ConfirmationPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: ConfirmationPage, useClass: ConfirmationPage }
      ])
    }).compileComponents();
  }));

  it("Should be created with no errors", inject([ConfirmationPage], sut => {
    expect(sut).to.exist;
  }));
});
