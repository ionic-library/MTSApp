import { CommonTestModule } from "./../../app/sharedModules";
import { SitePages } from "..";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { ConfirmationPage } from "./confirmation";

let { expect } = chai;
chai.use(sinonChai);

describe("The Confirmation Page", () => {
  let sut: ComponentFixture<ConfirmationPage>;
  let comp: ConfirmationPage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([ConfirmationPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(ConfirmationPage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

});
