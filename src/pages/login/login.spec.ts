import { CommonTestModule } from "./../../app/sharedModules";
import { LoginPage } from "./login";
import { TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("EI Reporting Login Page", () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([LoginPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: LoginPage, useClass: LoginPage }
      ])
    });
  });

  function updateForm(
    sut: LoginPage,
    sin: string,
    accessCode: string,
    provinceCode: string
  ) {
    sut.login.controls["sin"].setValue(sin);
    sut.login.controls["accessCode"].setValue(accessCode);
    sut.login.controls["provinceOfResidence"].setValue(provinceCode);
  }

  it("Should be created with no errors", inject([LoginPage], sut => {
    expect(sut).to.exist;
  }));

  it("Should report an error if no SIN is entered", inject([LoginPage], sut => {
    updateForm(sut, "", "1234", "on");
    expect(sut.login.controls.sin.valid).to.be.false;
  }));

  it("Should validate 100000009 as a valid sin", inject([LoginPage], sut => {
    updateForm(sut, "100000009", "1234", "on");
    expect(sut.login.controls.sin.valid).to.be.true;
  }));

  it("Should reject 123456789 as an invalid sin", inject([LoginPage], sut => {
    updateForm(sut, "123456789", "1234", "on");
    expect(sut.login.controls.sin.valid).to.be.false;
  }));
});
