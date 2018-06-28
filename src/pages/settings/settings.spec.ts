import { CommonTestModule } from "./../../app/sharedModules";
import { SettingsPage } from "./settings";
import { NavController } from "ionic-angular";
import { NavMock, SettingsMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "..";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { User, Settings } from "../../providers";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("The Settings Page", () => {
  let sut: ComponentFixture<SettingsPage>;
  let settingsPage: SettingsPage;
  let navPushSpy: sinon.SinonSpy;
  let navGetSpy: sinon.SinonSpy;
  let fakeNavController: NavMock;
  let fakeSettings: SettingsMock;
  let fakeUser: User;

  function setupTestBedConfig() {
    fakeSettings = new SettingsMock();
    fakeNavController = new NavMock();
    fakeUser = new User(null, null, null);
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([SettingsPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: NavController, useValue: fakeNavController },
        { provide: Settings, useValue: fakeSettings },
        { provide: User, useValue: fakeUser }
      ])
    }).compileComponents();
  }

  function createTestObjects() {
    sut = TestBed.createComponent(SettingsPage);
    settingsPage = sut.componentInstance;
    navPushSpy = sinon.spy(fakeNavController, "push");
    navGetSpy = sinon.spy(fakeNavController, "get");
  }

  describe("itself", () => {
    beforeEach(async () => {
      setupTestBedConfig();
    });

    beforeEach(() => {
      createTestObjects();
    });

    it("Should be created with no errors", () => {
      expect(settingsPage).to.exist;
    });
  });

  //   describe("Before Becoming Active", () => {
  //     beforeEach(async () => {
  //       setupTestBedConfig();
  //     });

  //     beforeEach(() => {
  //       createTestObjects();
  //     });

  //     it("Should check context for what page to render by checking passed NavParam 'page'", () => {
  //       settingsPage.ionViewWillEnter();
  //       expect(navGetSpy).to.have.been.called;
  //     });
  //   });
});
