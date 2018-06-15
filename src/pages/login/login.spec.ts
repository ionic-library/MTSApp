import { User } from "./../../providers/user/user";

import { CommonTestModule } from "./../../app/sharedModules";
import { LoginPage } from "./login";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);

describe("EI Reporting Login Page", () => {
  let sut: ComponentFixture<LoginPage>;
  let loginPage: LoginPage;
  let fakeUser: User;

  beforeEach(async () => {
    fakeUser = new User(null, null, null);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([LoginPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: User, useValue: fakeUser }
      ])
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(LoginPage);
    loginPage = sut.componentInstance;
  });

  function updateForm(sin: string, accessCode: string, provinceCode: string) {
    loginPage.login.controls["sin"].setValue(sin);
    loginPage.login.controls["accessCode"].setValue(accessCode);
    loginPage.login.controls["provinceOfResidence"].setValue(provinceCode);
  }

  it("Should be created with no errors", () => {
    expect(loginPage).to.exist;
  });

  it("Should report an error if no SIN is entered", () => {
    updateForm("", "1234", "on");
    expect(loginPage.login.controls.sin.valid).to.be.false;
  });

  it("Should validate 100000009 as a valid sin", () => {
    updateForm("100000009", "1234", "on");
    expect(loginPage.login.controls.sin.valid).to.be.true;
  });

  it("Should reject 123456789 as an invalid sin", () => {
    updateForm("123456789", "1234", "on");
    expect(loginPage.login.controls.sin.valid).to.be.false;
  });
});
