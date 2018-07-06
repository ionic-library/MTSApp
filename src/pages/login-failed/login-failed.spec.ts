import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { LoginFailedPage } from "./login-failed";

const { expect } = chai;
chai.use(sinonChai);

describe("The Login Failed Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([LoginFailedPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: LoginFailedPage, useClass: LoginFailedPage }
      ])
    });
  }));

  it("Should be created with no errors", inject([LoginFailedPage], sut => {
    expect(sut).to.exist;
  }));
});
