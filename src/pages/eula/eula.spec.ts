import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { EulaPage } from "./eula";
import { User } from "../../providers/user/user";
import { provideSettings } from "../../app/app.module";

let { expect } = chai;
chai.use(sinonChai);

const NOOP = () => {};

describe("The EULA Page", () => {
  let sut: ComponentFixture<EulaPage>;
  let comp: EulaPage;
  let user: User;

  beforeEach(() => {
    user = new User(null, null, null);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([EulaPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: User, useValue: user }
      ])
    });
    sut = TestBed.createComponent(EulaPage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

  it("setEulaAgreed is called on the user object.", () => {
    const eulaSpy = sinon.stub(user, "setEulaAgreed").returns(NOOP);

    comp.setEula();

    expect(eulaSpy).to.have.been.calledOnce;
  });
});
