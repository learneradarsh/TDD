const assert = require("chai").assert;
const measurement = require("./quantitymeasurement");

describe("Test case for feet", function() {
  it("should return true for 0 feet and 0 feet", function() {
    let isEqual = measurement.convertFeetIntoInch(0);
    assert.equal(isEqual, 0);
  });
  it("should return true if number is null", function() {
    let isNull = measurement.convertFeetIntoInch();
    assert.equal(isNull, true);
  });
  it("should return false if typeof number is not number", function() {
    let isNum = measurement.convertFeetIntoInch("4");
    assert.equal(isNum, false);
  });
});

describe("Test case for inch", function() {
  it("should return true if converted value is null", function() {
    let isNull = measurement.convertFeetIntoInch(null);
    assert.equal(isNull, true);
  });
  it("should return true if converted value is number", function() {
    assert.isNumber(measurement.convertFeetIntoInch(2));
  });
  it("should return 24 if pass 2", function() {
    let value = measurement.convertFeetIntoInch(2);
    assert.equal(value, 24);
  });
  it("should not return 1 if 1ft is not eq to 1 inch", function() {
    let value = measurement.convertFeetIntoInch(1);
    assert.notEqual(value, 1);
  });
  it("should return 12inch", function() {
    let value = measurement.convertFeetIntoInch(1);
    assert.equal(value, 12);
  });
});

describe("Test case for yard",function() {
  it("should return 1",function() {
    let value = measurement.convertFeetIntoYard(3);
    assert.equal(value,1);
  });
  it("should not equal if 1 ft != 1yd",function(){
    let value = measurement.convertFeetIntoYard(1);
    assert.notEqual(value,1);
  });
  it("should not equal if 1 in != 1yd ",function(){
    let value = measurement.convertInchIntoYard(1);
    assert.notEqual(value,1);
  });
  it("should equal if 1 yd = 36 in",function(){
    let value = measurement.convertYardIntoInch(1);
    assert.equal(value,36);
  });
  it("should equal if 36in = 1 yd",function(){
    let value = measurement.convertInchIntoYard(36);
    assert.equal(value,1);
  });
});
