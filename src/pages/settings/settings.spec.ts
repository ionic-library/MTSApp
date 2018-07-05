import { CommonTestModule } from "./../../app/sharedModules";
import { SettingsPage } from "./settings";
import { TestBed, async, inject } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("The Settings Page", () => {
  describe("itself", () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: CommonTestModule.getDeclarations([SettingsPage]),
        imports: CommonTestModule.getImports(),
        providers: CommonTestModule.getProviders([
          { provide: SettingsPage, useClass: SettingsPage }
        ])
      }).compileComponents();
    }));

    it("Should be created with no errors", inject([SettingsPage], sut => {
      expect(sut).to.exist;
    }));
  });
});
