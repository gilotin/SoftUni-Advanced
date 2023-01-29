let { assert } = require("chai");
let { isOddOrEven } = require("../Exercise/02.Even Or Odd");


describe("test isOddOrEven functionality", () => {
  describe("test isOddOrEven incorrect value", () => {
    it("Result should be undefined with array argument", () => {
      assert.equal(isOddOrEven([]), undefined);
    });

    it("Result should be undefined with empty object argument", () => {
      assert.equal(isOddOrEven({}), undefined);
    });

    it("Result should be undefined with empty argument", () => {
      assert.equal(isOddOrEven({ name: "Pesho" }), undefined);
    });

    it("Result should be undefined with number argument", () => {
      assert.equal(isOddOrEven(1), undefined);
    });

    it("Result should be undefined with boolean argument", () => {
      assert.equal(isOddOrEven(true), undefined);
    });
  });

  describe("test isOddOrEven correct value", () => {
    it("Result should be even with `Love`", () => {
      assert.equal(isOddOrEven("Love"), "even");
    });
    it("Result should be even with `Todor`", () => {
      assert.equal(isOddOrEven("Todor"), "odd");
    });
  });
});
