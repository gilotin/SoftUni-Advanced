const mathEnforcer = require("../Exercise/04.Math_Enforcer");
const { expect } = require("chai");

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("If the parameter is NOT a number return undefined", () => {
      expect(mathEnforcer.addFive("string")).to.equal(undefined);
      expect(mathEnforcer.addFive([])).to.equal(undefined);
      expect(mathEnforcer.addFive({})).to.equal(undefined);
      expect(mathEnforcer.addFive()).to.equal(undefined);
    });
    it("If parameter is number, add 5 and return result", () => {
      expect(mathEnforcer.addFive(1)).to.equal(1 + 5);
      expect(mathEnforcer.addFive(-10)).to.equal(-10 + 5);
      expect(mathEnforcer.addFive(1.222)).to.closeTo(1.222 + 5,0.01);
    });
  });
  describe("subtractTen", () => {
    it("If the parameter is NOT a number return undefined", () => {
      expect(mathEnforcer.subtractTen("string")).to.equal(undefined);
      expect(mathEnforcer.subtractTen([])).to.equal(undefined);
      expect(mathEnforcer.subtractTen({})).to.equal(undefined);
      expect(mathEnforcer.subtractTen()).to.equal(undefined);
    });
    it("If parameter is number, substract 10 and return result", () => {
      expect(mathEnforcer.subtractTen(5)).to.equal(5 - 10);
      expect(mathEnforcer.subtractTen(1.111)).to.closeTo(1.111 - 10,0.01);
      expect(mathEnforcer.subtractTen(50)).to.equal(50 - 10);
      expect(mathEnforcer.subtractTen(-50)).to.equal(-50 -10);
    });
  });
  describe("sum", () => {
    it("If any of the parameters are NOT a numbers return undefined", () => {
      expect(mathEnforcer.sum(1, "string")).to.equal(undefined);
      expect(mathEnforcer.sum("string", 1)).to.equal(undefined);
      expect(mathEnforcer.sum(1, [])).to.equal(undefined);
      expect(mathEnforcer.sum([], 1)).to.equal(undefined);
      expect(mathEnforcer.sum({}, 1)).to.equal(undefined);
      expect(mathEnforcer.sum(1, {})).to.equal(undefined);
      expect(mathEnforcer.sum()).to.equal(undefined);
    });
    it("If both are numbers, return sum", () => {
      expect(mathEnforcer.sum(1.111, 1.111)).to.closeTo(2.222,0.01);
      expect(mathEnforcer.sum(1, -10)).to.equal(-9);
      expect(mathEnforcer.sum(1, 1)).to.equal(2);
    });
  });
});
