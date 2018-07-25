import { CommonTestModule } from "./../../app/sharedModules";
import { async, TestBed, inject, fakeAsync, tick } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { noop } from "../../constants";
import { User } from "./user";
import { Storage } from "@ionic/storage";

const { expect } = chai;
chai.use(sinonChai);

describe("User Provider", () => {
  beforeEach(async(() => {
    //we have to stub the storage set and get here since the user provider calls to storage in the contstructor

    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations(),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    }).compileComponents();
  }));

  it("User get Eula should be called", inject(
    [Storage, User],
    (storage, sut) => {
      sinon
        .stub(storage, "get")
        .withArgs("eula")
        .resolves("Yes");

      sut.isEulaAgreed(val => {
        expect(val).to.be.true;
      }, noop);
    }
  ));

  it(
    "User set Eula should be called",
    fakeAsync(
      inject([Storage, User], (storage, sut) => {
        const successSpy = sinon.spy();

        sinon
          .stub(storage, "set")
          .withArgs("eula", "Yes")
          .resolves();

        sut.setEulaAgreed(successSpy, noop);

        tick(10000);
        expect(successSpy).to.have.been.called;
      })
    )
  );
});
