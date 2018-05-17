import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { CommonTestModule } from "../../app/sharedModules";
import { LoginPage } from "./login";
import { Ineeda, ineeda } from "ineeda";
import { User } from "../../providers";
import * as sinon from 'sinon';

// Test setup:

describe("EI Reporting Service Login Page", () => {
  let sut: ComponentFixture<LoginPage>;
  let comp: LoginPage;
  let userProvider: User;


  beforeEach(async () => {
    userProvider = ineeda.instanceof<User>(User);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([LoginPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: User, useClass: userProvider }
      ])
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(LoginPage);
    comp = sut.componentInstance;
  });

  afterEach(() => {
    sut.destroy();
    comp = null;
  });

  it("Should be created", () => {
    expect(comp instanceof LoginPage).toBe(true);
  });

  it("Should call login on the user provider and pass the SIN, AC, and province of residence when clicked", () => {
    comp.doLogin();

    sinon.spy(userProvider, 'login');

    expect(userProvider.login).toHaveBeenCalledTimes(1);
  });


  //TODO: Add test for login success
  //TODO: Add test for login failure
});
