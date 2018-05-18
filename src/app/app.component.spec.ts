import { async, TestBed } from "@angular/core/testing";
import { IonicModule, Platform } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { HttpTestingController } from "@angular/common/http/testing";
import { TranslateService } from "@ngx-translate/core";
import { MyApp } from "./app.component";
import { CommonTestModule } from "./sharedModules";

const TRANSLATIONS_EN = require('../assets/i18n/en.json');
const TRANSLATIONS_FR = require('../assets/i18n/fr.json');

describe("MyApp Component", () => {
  let fixture;
  let component;
  let translate: TranslateService;
  let http: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: CommonTestModule.getDeclarations(),
      imports: CommonTestModule.getImports(),
      providers: CommonTestModule.getProviders()
    });
    translate = TestBed.get(TranslateService);
    http = TestBed.get(HttpTestingController);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component instanceof MyApp).toBe(true);
  });

});
