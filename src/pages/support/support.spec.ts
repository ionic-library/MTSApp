import { CommonTestModule } from "./../../app/sharedModules";
import { SupportPage } from "./support";
import { NavController } from "ionic-angular";
import { NavMock } from "./../../../test-config/mocks-ionic";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { User } from "../../providers";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("The Support Page", () => {
  let sut: ComponentFixture<SupportPage>;
  let supportPage: SupportPage;
  let navSpy: sinon.SinonSpy;
  let fakeNavController: NavMock;
  let fakeUser: User;

  function setupTestBedConfig() {
    fakeNavController = new NavMock();
    fakeUser = new User(null, null, null);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([SupportPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController },
        { provide: User, useValue: fakeUser }
      ])
    }).compileComponents();
  }

  function createTestObjects() {
    sut = TestBed.createComponent(SupportPage);
    supportPage = sut.componentInstance;
    navSpy = sinon.spy(fakeNavController, "push");
  }

  describe("itself", () => {
    beforeEach(async () => {
      setupTestBedConfig();
    });

    beforeEach(() => {
      createTestObjects();
    });

    it("Should be created with no errors", () => {
      expect(supportPage).to.exist;
    });
  });
});
