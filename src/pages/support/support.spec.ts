import { CommonTestModule } from "./../../app/sharedModules";
import { SupportPage } from "./support";
import { TestBed, async, inject } from "@angular/core/testing";

import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("The Support Page", () => {
  describe("itself", () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: CommonTestModule.getDeclarations([SupportPage]),
        imports: CommonTestModule.getImports(),
        providers: CommonTestModule.getProviders([
          { provide: SupportPage, useClass: SupportPage }
        ])
      }).compileComponents();
    }));

    it("Should be created with no errors", inject([SupportPage], sut => {
      expect(sut).to.exist;
    }));
  });
});
