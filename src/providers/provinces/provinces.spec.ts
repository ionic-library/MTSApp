
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ProvincesProvider } from "../../providers";
import * as chai from "chai";


let { expect } = chai;

describe("Provinces provider", () => {
  let provinceProvider;

  beforeEach(() => {
    provinceProvider = new ProvincesProvider();
  });

  it("Should return the list of province codes", () => {
    let result = provinceProvider.getProvinces();
    expect(result).to.have.members(["AB", "BC", "MB", "NB", "NL", "NS", "ON", "PE", "QC", "SK", "NT", "NU", "YT" ]);

  });
});
