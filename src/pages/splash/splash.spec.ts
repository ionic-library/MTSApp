import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { SplashPage } from "./splash";
import { User, LangCodes } from "../../providers";
import { provideSettings } from "../../app/app.module";

let { expect } = chai;
chai.use(sinonChai);

const NOOP = () => {};

describe("The Splash Page", () => {
  let sut: ComponentFixture<SplashPage>;
  let comp: SplashPage;
  let user: User;

  beforeEach(() => {
    user = new User(null, null, null);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([SplashPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: User, useValue: user }
      ])
    });
    sut = TestBed.createComponent(SplashPage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

  it("setLang is called on the user object.", () => {
    const splashSpy = sinon.stub(user, "setLang").returns(NOOP);

    comp.setLang(LangCodes.EN);

    expect(splashSpy).to.have.been.calledOnce;
  });
});
