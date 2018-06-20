import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { User } from "./user";
import { StorageMock } from "../../../test-config/mocks-ionic";

let { expect } = chai;
chai.use(sinonChai);

const NOOP = () => {};
describe("User Object", () => {
  let sut: User;
  let fakeStorage: StorageMock;

  beforeEach(() => {
    fakeStorage = new StorageMock();
    sut = new User(null, fakeStorage, null);
  });

  it("User get Eula should be called", () => {
    const spy = sinon.stub(fakeStorage, "get").resolves(NOOP);

    sut.isEulaAgreed(NOOP, NOOP);

    expect(spy).to.have.been.calledWith("eula");
  });

  it("User set Eula should be called", () => {
    const spy = sinon.stub(fakeStorage, "set").resolves(NOOP);

    sut.setEulaAgreed(NOOP, NOOP);

    expect(spy).to.have.been.calledWith("eula");
  });
});
