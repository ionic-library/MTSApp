import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { SplashPage } from "./splash";
import { User, LangCodes } from "../../providers";
import { provideSettings } from "../../app/app.module";
import { StorageMock } from "../../../test-config/mocks-ionic";

let { expect } = chai;
chai.use(sinonChai);

const NOOP = () => {};

describe("The Splash Page", () => {
  let sut: ComponentFixture<SplashPage>;
  let comp: SplashPage;
  let user: User;
  let fakeStorage: StorageMock;
  let spy: any;

  beforeEach(() => {
    fakeStorage = new StorageMock();
    spy = sinon.stub(fakeStorage, "set").resolves(NOOP);
    sinon.stub(fakeStorage, "get").resolves(NOOP);

    user = new User(null, fakeStorage, null);
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
   

    user.setLang(LangCodes.EN);

    expect(spy).to.have.been.calledOnce;
  });
});
