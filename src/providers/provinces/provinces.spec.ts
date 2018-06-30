import { ProvincesProvider } from "../../providers";
import * as chai from "chai";

const { expect } = chai;

describe("Provinces provider", () => {
  it("Should return the list of province codes", () => {
    const provinceProvider: ProvincesProvider = new ProvincesProvider();
    expect(provinceProvider.provinceCodes).to.have.members([
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
});
