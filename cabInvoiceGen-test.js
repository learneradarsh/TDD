const assert = require("chai").assert;
const CabInvoiceGen = require("./cabInvoiceGen");

const cabInvoiceGen = new CabInvoiceGen();

describe("test cases for calcCabFare agrument values validations", function() {
  it("should return true if calCabFare has no arguments", function() {
    let isNull = cabInvoiceGen.calcCabFare();
    assert.equal(isNull, true);
  });
  it("should return true if calcCabFare has partial agrs", function() {
    let isPartial = cabInvoiceGen.calcCabFare(2);
    assert.equal(isPartial, true);
  });
  it("should not equal if calcCabFare has all args", function() {
    let isAllArgs = cabInvoiceGen.calcCabFare(2, 4);
    assert.notEqual(isAllArgs, true);
  });
  it("should return true if calcCabFare has invalid type args", function() {
    let isValid = cabInvoiceGen.calcCabFare("a", "b");
    assert.equal(isValid, true);
  });
  it("should not equal if calcCabFare has valid type args", function() {
    let isValid = cabInvoiceGen.calcCabFare(2, 4);
    assert.notEqual(isValid, true);
  });
});

describe("test cases for output of calcCabFare", function() {
  it("should return 5 if distance is zero", function() {
    let fare = cabInvoiceGen.calcCabFare(0, 0);
    assert.equal(fare, 5);
  });
  it("should return value if calcCabFare output is not null", function() {
    let isNull = cabInvoiceGen.calcCabFare(5, 5);
    assert.notEqual(isNull, null);
  });
  it("should return 140 for distance=2km and time=2hrs", function() {
    let fare = cabInvoiceGen.calcCabFare(2, 2);
    assert.equal(fare, 140);
  });
});

describe("test cases for multipleRideFare", function() {
  it("should return true if multipleRideFare has no arg", function() {
    let isNull = cabInvoiceGen.multipleRideFare();
    assert.equal(isNull, true);
  });
  it("should return true if multipleRideFare has invalid type arg", function() {
    let isValid = cabInvoiceGen.multipleRideFare("23");
    assert.equal(isValid, true);
  });
  it("should return 0 for 0 rides", function() {
    let rides = [];
    let totalRides = cabInvoiceGen.multipleRideFare(rides);
    assert.equal(totalRides, 0);
  });
  it("should not equal to null if agrTotalFare is not null", function() {
    let rides = [
      {
        distance: 4,
        time: 4
      }
    ];
    let isNull = cabInvoiceGen.multipleRideFare(rides);
    assert.notEqual(isNull, null);
  });
  it("should return 630 if calculated correct output", function() {
    let rides = [
      {
        distance: 4,
        time: 4
      },
      {
        distance: 5,
        time: 5
      }
    ];
    let agrFare = cabInvoiceGen.multipleRideFare(rides);
    assert.equal(agrFare, 630);
  });
  it("should return 10 if minimum fare condition is working for 2 rides where total distance and time is zero", function() {
    let rides = [
      {
        distance: 0,
        time: 0
      },
      {
        distance: 0,
        time: 0
      }
    ];
    let agrFare = cabInvoiceGen.multipleRideFare(rides);
    assert.equal(agrFare, 10);
  });
});
