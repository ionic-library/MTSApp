import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { LoginFailedPage } from "./login-failed";

let { expect } = chai;
chai.use(sinonChai);

describe("The Login Failed Page", () => {
  let sut: ComponentFixture<LoginFailedPage>;
  let comp: LoginFailedPage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([LoginFailedPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(LoginFailedPage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

});