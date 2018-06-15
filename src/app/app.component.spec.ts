import { StorageMock } from "./../../test-config/mocks-ionic";
import { async, TestBed } from "@angular/core/testing";
import { MyApp } from "./app.component";
import { CommonTestModule } from "./sharedModules";
import { User } from "../providers";

import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);

let NOOP = () => {};

describe("MyApp Component", () => {
  let fixture;
  let sut;
  let fakeUser: User;

  beforeEach(() => {
    fakeUser = new User(null, null);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations(),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: User, useValue: fakeUser }
      ])
    });

    sinon.stub(fakeUser, "GetLang").returns(NOOP);
    fixture = TestBed.createComponent(MyApp);
    sut = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(sut instanceof MyApp).to.be.true;
  });
});
