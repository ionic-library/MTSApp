import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { CommonTestModule } from "../../app/sharedModules";
import { LoginPage } from "./login";
import { Ineeda, ineeda } from "ineeda";
import { User } from "../../providers";
import { By } from "@angular/platform-browser";

describe("EI Reporting Service Login Page", () => {
  let sut: ComponentFixture<LoginPage>;
  let comp: LoginPage;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations([LoginPage]),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders([
        { provide: User, useFactory: ineeda.factory<User>() }
      ])
    });
  });

  beforeEach(() => {
    sut = TestBed.createComponent(LoginPage);
    comp = sut.componentInstance;
  });

  afterEach(() => {
    sut.destroy();
    comp = null;
  });

  it("Should be created", () => {
    expect(comp instanceof LoginPage).toBe(true);
  });

  it("Should have 13 provinces and territories", () => {
    let provinces = sut.debugElement.query(By.css("#residence"));
    expect(provinces.nativeElement.childNodes.length).toBe(13);
  });

  it("Should have all provinces and territories", () => {
    let provinces = sut.debugElement.query(By.css("#residence"));
    expect(provinces.childNodes.values).toBe([
    "AB",
    "BC",
    "MB",
    "NB",
    "NL",
    "NS",
    "ON",
    "PE",
    "QC",
    "SK",
    "NT",
    "NU",
    "YT"
    ]);
  });

  //TODO: Add test for login success
  //TODO: Add test for login failure
});
