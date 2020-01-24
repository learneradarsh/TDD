const assert = require("chai").assert;
const sum = require("./sum");

describe("sum function test", function() {
  it("should return true if sum has no arguments", function() {
    let hasNoArguments = sum();
    assert.equal(hasNoArguments, true);
  });

  it("should return true if sum has partial arguments", function() {
    let isPartial = sum(2);
    assert.equal(isPartial, true);
  });

  it("should return true if sum accepts NaN type argument", function() {
    let isInteger = sum("abc", 2);
    assert.equal(isInteger, true);
  });

  it("should return sum of 2 valid integers", function() {
    let isValidSum = sum(2, 4);
    assert.equal(isValidSum, 6);
  });
});
