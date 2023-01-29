let { assert } = require("chai");
let { lookupChar } = require("../Exercise/03. Char Lookup");

describe("Test lookup functionality for one of the parameters separately", () => {
  it("result should be undefined if the first parameter is incorect", () => {
    assert.equal(lookupChar(5, 5), undefined);
  });
  it("result should be undefined if the second parameter is incorect", () => {
    assert.equal(lookupChar("Pesho", "Gosho"), undefined);
  });
  it("result should be undefined if the second parameter is decimal number", () => {
    assert.equal(lookupChar("Pesho", 0.1), undefined);
  });
  it("result should be undefined with if the fist parameter is an array", () => {
    assert.equal(lookupChar([], 0), undefined);
  });
});

describe("Test lookup functionality with right parameters, but wrong lengths", () => {
  it("resut should be incorect with incorrect index", () => {
    assert.equal(lookupChar("Todor", 100), "Incorrect index");
  });

  it("resut should be incorect with equal indexes", () => {
    assert.equal(lookupChar("Todor", 5), "Incorrect index");
  });
  it("resut should be incorect with negattive index", () => {
    assert.equal(lookupChar("Todor", -5), "Incorrect index");
  });
});

describe("Test with correct values and types", () => {
  it("result should be T with first index", () => {
    assert.equal(lookupChar("Todor", 0), "T");
  });

  it("result should be r with last index", () => {
    assert.equal(lookupChar("Todor", 4), "r");
  });
});
