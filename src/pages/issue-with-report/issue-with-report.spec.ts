import { CommonTestModule } from "./../../app/sharedModules";
import { NavController } from "ionic-angular";
import { NavMock } from "./../../../test-config/mocks-ionic";
import { SitePages } from "..";
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";
import { IssueWithReportPage } from "./issue-with-report";

let { expect } = chai;
chai.use(sinonChai);

describe("The Issue With Login Page", () => {
  let sut: ComponentFixture<IssueWithReportPage>;
  let comp: IssueWithReportPage;
  let navSpy: sinon.SinonSpy;
  let fakeNavController: NavMock;

  beforeEach(async () => {
    fakeNavController = new NavMock();
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([IssueWithReportPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(IssueWithReportPage);
    comp = sut.componentInstance;
  });

  it("Should be created with no errors", () => {
    expect(comp).to.exist;
  });

});
