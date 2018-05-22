import { FormControl } from '@angular/forms';
import { SinValidator } from './sin';
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import * as chai from "chai";
import * as sinon from "sinon";
import * as sinonChai from "sinon-chai";

let { expect } = chai;
chai.use(sinonChai);


describe("Sin Validator", () => {

  it("Should return true for a valid sin", () => {
    let fc = new FormControl();
    fc.setValue("100000009");
    expect(SinValidator.isValid(fc)).to.be.true;
  });

  it("Should return false for an invalid sin", () => {
    let fc = new FormControl();
    fc.setValue("123456789");
    expect(SinValidator.isValid(fc)).to.be.false;
  });

});