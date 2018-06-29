import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { EulaPage } from "./eula";
import { User } from "../../providers/user/user";

const { expect } = chai;
chai.use(sinonChai);

const NOOP = () => {};

describe("The EULA Page", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([EulaPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: EulaPage, useClass: EulaPage }
      ])
    }).compileComponents();
  }));

  it("Should be created with no errors", inject([EulaPage], sut => {
    expect(sut).to.exist;
  }));

  it("setEulaAgreed is called on the user object.", inject(
    [User, EulaPage],
    (mockUser, sut) => {
      const eulaSpy = sinon.spy(mockUser, "setEulaAgreed");

      sut.setEula();

      expect(eulaSpy).to.have.been.calledOnce;
    }
  ));
});
