import { ValidationErrors } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { SinValidator } from './sin';
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);

describe("Sin Validator", () => {
  it("Should return null for a valid sin", () =>  {
    expect(testValidator("100000009")).to.be.null;
  });

  it("Should return a ValidationErrors object for an invalid sin", () => {
    expect(testValidator("12345678")).to.be.eql({ "foo" : "bar"});
  });

});

function testValidator(sin : string) : ValidationErrors | null {
  let fc = new FormControl();
  fc.setValue(sin);
  return SinValidator.isValid(fc);
}
