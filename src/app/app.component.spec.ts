import { async, TestBed, inject } from "@angular/core/testing";
import { MyApp } from "./app.component";
import { CommonTestModule } from "./sharedModules";

import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

const { expect } = chai;
chai.use(sinonChai);

describe("MyApp Component", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations(),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: MyApp, useClass: MyApp }
      ])
    }).compileComponents();
  }));

  it("should be created", inject([MyApp], sut => {
    expect(sut).to.exist;
  }));
});
