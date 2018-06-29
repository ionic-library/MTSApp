import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";
import { SplashPage } from "./splash";

const { expect } = chai;
chai.use(sinonChai);

describe("The Splash Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([SplashPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: SplashPage, useClass: SplashPage }
      ])
    }).compileComponents();
  }));

  it("Should be created with no errors", inject([SplashPage], sut => {
    expect(sut).to.exist;
  }));
});
